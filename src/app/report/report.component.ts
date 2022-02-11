import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  profile: any;
  editMode = false;
  hobby : string;

  constructor(public clientService: ClientService,
    private route: ActivatedRoute, private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {

    this.clientService.bindListHobby();

    this.clientService.getHobbie().subscribe(
      result => {
    console.log(result); 
    this.hobby = result;
    });

    this.route.data.subscribe(data => {
      this.profile = data['profile'];
    });
  }
  //logout
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

  clientlist()
  {
    this.router.navigateByUrl('client-food-list');
  }
}
