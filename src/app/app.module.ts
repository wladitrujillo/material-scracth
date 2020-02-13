import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';

import { HttpClientModule } from "@angular/common/http";
import { CoursesService } from "./services/courses.service";
import { CourseResolver } from "./services/course.resolver";
import { CourseComponent } from './course/course.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

const MaterialModules = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesCardListComponent, CourseComponent, CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MaterialModules

  ],
  providers: [
    CoursesService,
    CourseResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
