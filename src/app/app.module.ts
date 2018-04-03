import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JobListComponent } from './job-list/job-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    JobListComponent,
    NavBarComponent,
    DropdownMenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
