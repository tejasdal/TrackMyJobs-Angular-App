export class Notes {

    noteID: number;
    noteDetails: string;
    userID: string;

    constructor() { }

    public get id(): number {
        return this.noteID;
    }
    public set id(value: number) {
        this.noteID = value;
    }
    public get note(): string {
        return this.noteDetails;
    }
    public set note(value: string) {
        this.noteDetails = value;
    }
    public get userId(): string {
        return this.userID;
    }
    public set userId(value: string) {
        this.userID = value;
    }
}