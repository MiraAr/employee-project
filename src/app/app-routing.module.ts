import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGaurdService]},
  { path: 'parent', component: ParentComponent ,canActivate:[AuthGaurdService]},
  { path: 'teacher', component: TeacherComponent, canActivate:[AuthGaurdService] },
  { path: 'admin', component: AdminComponent , canActivate:[AuthGaurdService]},
  { path: 'contactUs', component: ContactComponent, canActivate:[AuthGaurdService] },
  { path: 'log-in', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
