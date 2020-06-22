import { JobBoardAnalysisComponent } from './job-board-analysis/job-board-analysis.component';
import { WriteBlogsComponent } from './write-blogs/write-blogs.component';
import { NgModule, Component } from '@angular/core';
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
import { AuthGuard } from "./auth/auth-guard.service";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent, canActivate:[AuthGuard]},
  { path: 'blogs/:id', component: BlogsPostDetailComponent, canActivate:[AuthGuard]},
  { path: 'jobs', component: JobsComponent, canActivate:[AuthGuard]},
  { path: 'jobs-detail', component: JobsDetailComponent, canActivate:[AuthGuard]},
  { path: 'job-search', component: JobSearchComponent, canActivate:[AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate:[AuthGuard]},
  { path: 'about', component: AboutComponent, canActivate:[AuthGuard]},
  { path: 'writeBlog', component: WriteBlogsComponent, canActivate:[AuthGuard]},
  { path: 'analysis', component: JobBoardAnalysisComponent, canActivate:[AuthGuard]},
  { path: "job-board", component: JobBoardComponent, canActivate:[AuthGuard]},
  { path: "job-activity", component: JobActivityComponent, canActivate:[AuthGuard]},
  { path: "profile", component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: '**', component: NotfoundComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
