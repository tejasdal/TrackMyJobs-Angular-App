import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { JobsComponent } from './jobs/jobs.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BlogsfilterPipe } from './blogs/blogsfilter.pipe';
import { BlogsPostDetailComponent } from './blogs-post-detail/blogs-post-detail.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { JobsfilterPipe } from './jobs/jobsfilter.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgetPasswordDialogComponent } from './forget-password-dialog/forget-password-dialog.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { JobSearchComponent } from './job-search/job-search.component';
import { WriteBlogsComponent } from './write-blogs/write-blogs.component';
import { JobBoardAnalysisComponent } from './job-board-analysis/job-board-analysis.component';
import { DialogsComponent } from './dialogs/dialogs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    JobsComponent,
    SignInComponent,
    SignUpComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    BlogsfilterPipe,
    BlogsPostDetailComponent,
    JobsDetailComponent,
    JobsfilterPipe,
    ForgetPasswordDialogComponent,
    NavSearchComponent,
    JobSearchComponent,
    WriteBlogsComponent,
    JobBoardAnalysisComponent,
    DialogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
