import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "./user.module";
import { Router } from "@angular/router";

export interface AuthReturnData{
    kind:string,
    idToken:string,
    email: string;
    refreshToken: string,
    expiresIn: string,
    localId:string
}

@Injectable({providedIn:'root'})
export class AuthService{
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router:Router){

    }

    signUp(email:string, password:string){
    return this.http
        .post<AuthReturnData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlmqO3Ee6UTRXGKJkigz4-jtE2QWbI52o",
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError),tap(resData => {
            this.handleUserAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
        }));
    }
    
    addUserToDB(email:string, password:string){
        return this.http
            .post(
            "https://app-jobtracker.herokuapp.com/user/newUser",
            {
                email: email,
                password: password
            });
        }

    Login(email:string, password:string){
        return this.http
            .post<AuthReturnData>(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlmqO3Ee6UTRXGKJkigz4-jtE2QWbI52o",
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleError),tap(resData => {
                this.handleUserAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
            }));
    }

    autoLogin(){
        
        const userData: {
            email:string;
            id:string;
            _token:string;
            _tokenExpirationDate:string;
        } = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        )
        if(loadedUser.token){
            const expiration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expiration);
            this.user.next(loadedUser);
        }
    }

    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(()=>{
            this.logOut()
        },expirationDuration);
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/home']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    private handleUserAuth(email:string,userId:string,token:string,expirationNumber:number){
        let exiprationDate = new Date(new Date().getTime() + (expirationNumber * 1000));
        let user = new User(email,userId,token,exiprationDate);
        this.user.next(user);
        this.autoLogout(expirationNumber * 1000);
        localStorage.setItem('userData',JSON.stringify(user));
        localStorage.setItem('NotifyTheUser','false');
    }

    private handleError(errorRes:HttpErrorResponse){
        let errorMessage = "An Unknown Error Occured!";
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_NOT_FOUND':
                errorMessage = "This email does not exist";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "This password is invalid";
                break;
            case 'USER_DISABLED':
                errorMessage = "User disabled";
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = "This operation is not allowed"
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = "Too many attempts, try again later!"
                break;
        }
        return throwError(errorMessage);
    }
}