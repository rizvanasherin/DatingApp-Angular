import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-food-list',
  templateUrl: './client-food-list.component.html',
  styleUrls: ['./client-food-list.component.scss']
})
export class ClientFoodListComponent implements OnInit {

  constructor(public clientService: ClientService,private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
        //LifeCycle Hook      --initialize
        console.log("Welcome to lifecycle hook");
        // this.getEmployees();   //1
        this.clientService.bindListFoods(); 
  }


  

}
