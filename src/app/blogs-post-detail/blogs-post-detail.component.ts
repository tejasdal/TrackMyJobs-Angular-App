import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../blogs/blogs.service';

@Component({
  selector: 'app-blogs-post-detail',
  templateUrl: './blogs-post-detail.component.html',
  styleUrls: ['./blogs-post-detail.component.css']
})
export class BlogsPostDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private blogService: BlogsService, private router: Router) { }
  public blog_id;
  public blogPost: any[];
  public user: Boolean;

  ngOnInit() {
    let blog_id = this.route.snapshot.params['id'];
    this.blog_id = decodeURIComponent(blog_id);
    this.blogPost = this.getBlogbyId();
    console.log("blogpost");
  }

  onload() {
    if (this.blogPost[1] === JSON.parse(localStorage.getItem("userData"))["email"]) {
      return true;
    }
    else { return false; }
  }

  getBlogbyId() {
    var blog: any = [];
    console.log("inside getblogbyid");
    console.log(this.blog_id);
    this.blogService.getSpecificBlog(this.blog_id).subscribe(bp => {
      console.log(typeof (bp))
      for (var bb in bp) {
        blog.push(bp[bb]);
      }
    });
    console.log(blog);
    return blog;
  }

}
