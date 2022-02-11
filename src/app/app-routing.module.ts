import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientFoodListComponent } from './client-food-list/client-food-list.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientComponent } from './clients/client/client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientComponent },
  { path: 'client/:Cid', component: ClientComponent },
  { path: 'client-list', component: ClientListComponent},
  { path: 'client-list', component: ClientListComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'user', component: UsersComponent},
  { path: 'report', component: ReportComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'client-food-list', component: ClientFoodListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
