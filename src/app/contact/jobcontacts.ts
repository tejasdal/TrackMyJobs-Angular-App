import { Contact } from './contact';

export class JobContacts implements Contact {
    contactID: number;
    contactName: string;
    contactEmail: string;
    company: string;
    jobPosition: string; 
    userID: string;
    
    constructor(){}

    public get ID(){
        return this.contactID;
    }

    public set ID(contactID:number){
        this.contactID = contactID;
    }

    public get Name(){
        return this.contactName;
    }

    public set Name(contactName:string){
        this.contactName = contactName;
    }

    public get Email(){
        return this.contactEmail;
    }

    public set Email(contactEmail:string){
        this.contactEmail = contactEmail;
    }

    public get CompanyName(){
        return this.company;
    }

    public set CompanyName(company:string){
        this.company = company;
    }
    public get Position(){
        return this.jobPosition;
    }
    public set Position(jobPosition:string){
        this.jobPosition = jobPosition;
    }

    public get userId(): string {
        return this.userID;
    }
    public set userId(value: string) {
        this.userID = value;
    }
}