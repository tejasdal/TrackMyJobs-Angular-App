import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export interface ProfileReturnData{
    firstName:string,
    lastName:string,
    email: string;
    phone: string,
    linkedInURL: string,
    password:string
}

@Injectable({providedIn:'root'})
export class ProfileService{
    
    constructor(private http: HttpClient){
    }

    getProfile(email:string){
        return this.http.get<ProfileReturnData>("https://app-jobtracker.herokuapp.com/user/getUser/"+email).pipe(map(data =>data));
    }

    updateProfile(email:string,firtname:string,lastname:string,phone:string,url:string,password:string){
        return this.http
        .post<string>(
        "https://app-jobtracker.herokuapp.com/user/updateUser",
        {
            firstName: firtname,
            lastName: lastname,
            phone: phone,
            email: email,
            linkedInURL: url,
            password: password
        })
        .pipe(map(res => res));
    }

    resetPassword(email:string){
        return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBlmqO3Ee6UTRXGKJkigz4-jtE2QWbI52o",{
            requestType :"PASSWORD_RESET",
            email: email
        }).pipe(map(data =>data));
    }
}