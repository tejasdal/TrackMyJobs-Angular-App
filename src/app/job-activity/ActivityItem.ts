export class ActivityItem {

    private _id: number;
    private _activity: string;
    private _deadline: Date;
    private _completedOn: Date;
    private _isCompleted: boolean;

    constructor() { }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get activity(): string {
        return this._activity;
    }
    public set activity(value: string) {
        this._activity = value;
    }
    public get deadline(): Date {
        return this._deadline;
    }
    public set deadline(value: Date) {
        this._deadline = value;
    }
    public get completedOn(): Date {
        return this._completedOn;
    }
    public set completedOn(value: Date) {
        this._completedOn = value;
    }
    public get isCompleted(): boolean {
        return this._isCompleted;
    }
    public set isCompleted(value: boolean) {
        this._isCompleted = value;
    }
}