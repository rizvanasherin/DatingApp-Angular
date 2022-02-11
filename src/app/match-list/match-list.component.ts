import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  filter: string;

  constructor(public clientService: ClientService,
    private router : Router) { }

  ngOnInit(): void {
        //LifeCycle Hook      --initialize
        console.log("Welcome to lifecycle hook");
        // this.getEmployees();   //1
        this.clientService.bindListClients(); 
        this.clientService.bindListHobbies();
  }


}
