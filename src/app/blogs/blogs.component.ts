import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from './Blog';
import { BlogsService } from './blogs.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotifierService } from "angular-notifier";



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {

  public blogposts: Blog[];
  blogSearch: string;
  public showSpinner: boolean;
  private readonly notifier: NotifierService;

  private FETCH_BLOG_ERROR = "Failed to fetch contacts from the server!";

  constructor(private router: Router, private blogService: BlogsService, private _snackBar: MatSnackBar, notifierService: NotifierService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getAllBlogPost();
  }
  getAllBlogPost() {
    this.blogService.fetchAllBlog().subscribe((data: BlogResponse) => {
      this.blogposts = data as Blog[];
      console.log(this.blogposts);
      this.showSpinner = false;
    }, error => {
      this.showSpinner = false;
      this.showError(this.FETCH_BLOG_ERROR);
    });
  }


  showError(message: string) {
    this.notifier.show({
      type: "error",
      message: message
    })
  }

  // blogs: any[] = [
  //   { id: "1", title: 'How to create resume', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_accept_tasks_po1c.svg" },
  //   { id: "2", title: 'How to improve your writing', description: 'i ubique temporibus per ex, atomorum voluptaria disputati', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_book_lover_mkck.svg" },
  //   { id: "3", title: 'Manage your Tasks', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_accept_tasks_po1c.svg" },
  //   { id: "4", title: 'Manage your Applications', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_book_lover_mkck.svg" },
  //   { id: "5", title: 'Build Networking', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_accept_tasks_po1c.svg" },
  //   { id: "6", title: 'View Analytics', description: 'i ubique temporibus per ex, atomorum voluptaria disputati', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_book_lover_mkck.svg" },
  //   { id: "7", title: 'Find Your Dream Job', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_accept_tasks_po1c.svg" },
  //   { id: "8", title: 'Prepare for interviews', description: 'i ubique temporibus per ex, atomorum voluptaria disputati', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_book_lover_mkck.svg" },
  //   { id: "9", title: 'Showcase your Skills', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_accept_tasks_po1c.svg" },
  //   { id: "10", title: 'Be Productive', description: 'i ubique temporibus per ex, atomorum voluptaria disputati', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tellus cras adipiscing enim eu. Faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis nisl. Felis imperdiet proin fermentum leo vel orci porta non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet porttitor eget dolor morbi non. Sit amet aliquam id diam maecenas. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit amet porttitor eget.", author: "Zankrut Thakkar", img: "/assets/undraw_book_lover_mkck.svg" }
  // ];

  onBlogCard(blog) {
    let encodedName = encodeURIComponent(blog.id);
    console.log("encode name" + encodedName)
    this.router.navigate(['/blogs', encodedName])

  }

  onWriteBlog() {
    this.router.navigate(['/writeBlog']);
  }

}

export interface BlogResponse {
  status?: Boolean;
  blog?: any;
}