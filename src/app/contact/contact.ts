export class Contact {
    private _id: number;
    private _Name: string;
    private _Email: string;
    private _Company: string;
    private _Position: string;
  
    constructor(){}
  
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
  
    public get Name(): string {
      return this._Name;
    }
    public set Name(value: string) {
      this._Name = value;
    }
  
    public get Company(): string {
      return this._Company;
    }
    public set Company(value: string) {
      this._Company = value;
    }
  
    public get Email(): string {
      return this._Email;
    }
    public set Email(value: string) {
      this._Email = value;
    }
  
    public get Position(): string {
      return this._Position;
    }
    public set Position(value: string) {
      this._Position = value;
    }
  }