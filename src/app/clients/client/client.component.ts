import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  Cid: number;

  constructor(public empService: ClientService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    //get departments
    this.empService.bindListHobbies();

    //get empId from ActivateRoute
    this.Cid = this.route.snapshot.params['Cid'];

    //get employee by id
    if (this.Cid!= 0 || this.Cid != null) {
      //get employee
      this.empService.getClientId(this.Cid).subscribe
        (
          result => {
            console.log(result);
            //assign this result to empService formData
            this.empService.formData = Object.assign({}, result);
          },
          error => {

          }
        );
    }
  }


  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.empService.formData.Cid;

    //call insert or update method
    if (addId == 0 || addId == null) {
      //call insert
      this.insertClientRecord(form);
    }
    else {
      //call update
      this.updateClientRecord(form);
    }
  }

    //clear all contents after submit  --initialization
    resetForm(form?: NgForm) 
    {
      if (form != null) {
        form.resetForm();
      }
    }

  //insert method
  insertClientRecord(form?: NgForm) {
    console.log("Inserting a record..");
    this.empService.insertClient(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('Created Profile successfully', 'EmpApp v2o22');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //update method
  updateClientRecord(form?: NgForm) {
    console.log("Updating a record..");
    this.empService.updateClient(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('Client record has been updated successfully', 'EmpApp v2o22');
        },
        (error) => {
          console.log(error);
        }
      );
  }
    //logout
    logOut()
    {
      this.authService.logOut();
      this.router.navigateByUrl('login');
    }
  

}

