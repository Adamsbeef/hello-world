import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponet } from './course.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors/author.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponet,
    CourseComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    AuthorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
