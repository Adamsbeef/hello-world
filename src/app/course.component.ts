import { from } from "rxjs";
import { Component } from '@angular/core';
import { CourseService as CourseService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
     <button class="btn btn-primary">Save</button>
    `
})

export class CoursesComponet{

    title = "List of Courses";
    courses;


    constructor(service:CourseService){
        this.courses = service.getCourses();
    }

}