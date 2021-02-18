import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { LogInComponent } from './log-in/log-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';

@NgModule({
	declarations: [
    AppComponent,
    DashboardComponent,
    ParentComponent,
    TeacherComponent,
    AdminComponent,
    ContactComponent,
    LogInComponent,
    TableComponent,
    AddFormComponent,
    NavComponent,
    FooterComponent,
    SidenavComponent
	],
	imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {}
