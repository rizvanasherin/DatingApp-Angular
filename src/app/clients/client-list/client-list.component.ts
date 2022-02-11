import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  //declare variable
  page: number = 1;
  filter: string;
  constructor(public clientService: ClientService,private authService : AuthService,
    private router : Router) { }  //constructor injection

  ngOnInit(): void {
    //LifeCycle Hook      --initialize
    console.log("Welcome to lifecycle hook");
    // this.getEmployees();   //1
    this.clientService.bindListClients();  //2
  }
  //1
  //Get all employees
  getClients() {
    //call service method
    this.clientService.getAllClients().subscribe(
      response => {
        console.log('Retreiving from list');
        console.log(response);
      },
      error => {
        console.log('Error Occured!');
      }
    );
  }

  //insert employee
  insertClient()
  {
    this.router.navigate(['client']);
  }
  
  //edit employee
  updateClient(Cid: number) {
    console.log(Cid);
    //navigate to edit form with selected employee details
    this.router.navigate(['client',Cid])
  }


  //delete employee
  DeleteClient(Cid: number) {
    if (confirm('Are you sure to DELETE the record ?')) {
      this.clientService.DeleteClient(Cid).subscribe(
        response => {
          this.clientService.bindListClients();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

    //logout
    logOut()
    {
      this.authService.logOut();
      this.router.navigateByUrl('login');
    }

}
