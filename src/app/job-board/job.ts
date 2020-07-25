// @author: Tejas Patel
export class Job {
  private _id: number;
  private _company: string;
  private _jobTitle: string;
  private _color: string;
  private _status: number;
  private _jobBoardId: number;
  
  constructor(){}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get company(): string {
    return this._company;
  }
  public set company(value: string) {
    this._company = value;
  }

  public get jobTitle(): string {
    return this._jobTitle;
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }

  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  public get status(): number {
    return this._status;
  }
  public set status(value: number) {
    this._status = value;
  }
  public get jobBoardId(): number {
    return this._jobBoardId;
  }
  public set jobBoardId(value: number) {
    this._jobBoardId = value;
  }
}