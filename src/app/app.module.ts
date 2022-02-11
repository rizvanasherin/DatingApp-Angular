import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import {AuthInterceptor } from './shared/auth.interceptor';
import { AuthGuard } from './shared/auth.guard';
import {ClientService} from './shared/client.service';
import { ClientComponent } from './clients/client/client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ReportComponent } from './report/report.component';
import { MatchListComponent } from './match-list/match-list.component';
import { RegisterComponent } from './register/register.component';
import { ClientFoodListComponent } from './client-food-list/client-food-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ClientComponent,
    ClientListComponent,
    LoginComponent,
    UsersComponent,
    ReportComponent,
    MatchListComponent,
    RegisterComponent,
    ClientFoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ClientService,AuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
