import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //courses: Course[] =[];
  courses$: Observable<Course[]>;

  displayedColumns = ['name','category'];

  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    this.courses$ = this.coursesService.list();

    //this.coursesService.list().subscribe(courses => this.courses = courses);
   }

  ngOnInit(): void {

  }

}
