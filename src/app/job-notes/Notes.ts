export class Notes {

    private _id: number;
    private _note: string;
    
    constructor() { }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get note(): string {
        return this._note;
    }
    public set note(value: string) {
        this._note = value;
    }
}