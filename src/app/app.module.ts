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

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const MaterialModules = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
