import { JobApplication } from './jobApplication';

export interface JobBoardData {
    WHISHLIST: Array<JobApplication>;
    APPLIED:  Array<JobApplication>;
    INTERVIEW:  Array<JobApplication>;
    OFFER:  Array<JobApplication>;
    REJECT:  Array<JobApplication>;
}