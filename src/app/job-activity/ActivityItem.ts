export class ActivityItem {

    id: number;
    user_id: string;
    date_created: Date;
    date_completed: Date;
    activity_status: number;
    activity_deadline: Date;
    activity_detail: string;
  
    constructor() { }

    public get ID(): number {
        return this.id;
    }
    public set ID(value: number) {
        this.id = value;
    }

    public get userID(): string{
        return this.user_id;
    }

    public set userID(value : string){
        this.user_id = value;
    }

    public get dateCreated(): Date{
        return this.date_created;
    }

    public set dateCreated(value:Date){
        this.date_created = value;
    }

    public get dateCompleted(): Date{
        return this.date_completed;
    }

    public set dateCompleted(value:Date){
        this.date_completed = value;
    }

    public get activityStatus(): number {
        return this.activity_status;
    }
    public set activityStatus(value: number) {
        this.activity_status = value;
    }

    public get activityDeadline(): Date{
        return this.activity_deadline;
    }

    public set activityDeadline(value:Date){
        this.activity_deadline = value;
    }

    public get activityDetail(): string{
        return this.activity_detail;
    }

    public set activityDetail(value : string){
        this.activity_detail = value;
    }

}