import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogsfilter'
})
export class BlogsfilterPipe implements PipeTransform {

  transform(blogs: any, keyword: any): any {
    if (keyword === undefined) return blogs;

    return blogs.filter(function (blog) {
      return blog.title.toLowerCase().includes(keyword.toLowerCase())
    })
  }

}
