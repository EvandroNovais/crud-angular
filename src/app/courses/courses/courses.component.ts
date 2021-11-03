import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CoursesService } from '../services/courses.service';
import { Course } from './../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //courses: Course[] =[];
  courses$: Observable<Course[]>;

  displayedColumns = ['name','category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    //this.courses = [];
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError("Dados de cursos não foram encontrados");
        return of([]);
      })
    );

    //this.coursesService.list().subscribe(courses => this.courses = courses);
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
