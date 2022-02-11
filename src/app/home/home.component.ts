import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //constructor injection
  constructor(private router : Router) { }

  ngOnInit(): void {}

    //logout
    login()
    {
      this.router.navigateByUrl('login');
    }

        //logout
        register()
        {
          this.router.navigateByUrl('register');
        }



}