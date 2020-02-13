import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort"; 
import { MatTableDataSource } from "@angular/material/table";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, timeout, takeWhile} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:Course;

  dataSource = new MatTableDataSource([]);

  
  displayedColumns= ["seqNo", "description", "duration"];

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {

  }

  ngOnInit() {

      this.course = this.route.snapshot.data["course"];

      this.coursesService.findAllCourseLessons(this.course.id).subscribe(lessons => this.dataSource.data = lessons );

  }

  ngAfterViewInit() {

  }

  searchLessons(search = ''){
    this.dataSource.filter = search.toLowerCase().trim();
  }

}
