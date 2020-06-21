import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobsfilter'
})
export class JobsfilterPipe implements PipeTransform {

  transform(jobs: any, keyword: any): any {
    if (keyword === undefined) return jobs;

    return jobs.filter(function (job) {
      return job.jobtitle.toLowerCase().includes(keyword.toLowerCase())
    })
  }
}
