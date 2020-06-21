import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { JobsComponent } from './jobs/jobs.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogsPostDetailComponent } from './blogs-post-detail/blogs-post-detail.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { JobActivityComponent } from './job-activity/job-activity.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogsPostDetailComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs-detail', component: JobsDetailComponent },
  { path: 'job-search', component: JobSearchComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: "job-board", component: JobBoardComponent},
  { path: "job-activity", component: JobActivityComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
