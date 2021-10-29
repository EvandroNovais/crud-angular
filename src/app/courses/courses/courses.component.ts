import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  displayedColumns = ['name','category'];

  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    //this.courses = this.coursesService.list();
   }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
