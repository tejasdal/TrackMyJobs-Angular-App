import { Job } from './job';
import { JobApplication } from './jobApplication';

export class JobStatus {
    id: number;
    listName: string;
    jobs: Array<JobApplication>;
}

// export class JobStatus {
//     private _id: number;
//     private _listName: string;
//     private _order: number;
//     private _jobs: Array<Job>;

//     constructor() { }

//     public get id(): number {
//         return this._id;
//     }
//     public set id(value: number) {
//         this._id = value;
//     }

//     public get listName(): string {
//         return this._listName;
//     }
//     public set listName(value: string) {
//         this._listName = value;
//     }

//     public get order(): number {
//         return this._order;
//     }
//     public set order(value: number) {
//         this._order = value;
//     }

//     public get jobs(): Array<Job> {
//         return this._jobs;
//     }
//     public set jobs(value: Array<Job>) {
//         this._jobs = value;
//     }

// }