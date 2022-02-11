import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { environment } from 'src/environments/environment';
import {Hobbie} from './hobbie';
import {Favfood} from './favfood';
import { User } from './user';
import {Hobbiedetails} from './hobbiedetails';
import { FavfoodDetails} from './favfood-details';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

 //retrieve all data from get method  --http
 clients: Client[];   //stores all employee detail
 hobbies : Hobbie[];
 foods : Favfood[];
 users : User[];
 favfoods :  FavfoodDetails[];
 hobbiedetails : Hobbiedetails[];
 formData: Client = new Client();
 formData1: User = new User();
 formData2: Hobbie = new Hobbie();
 formData3: Hobbiedetails = new Hobbiedetails();
 formData4 : FavfoodDetails = new FavfoodDetails();
 //Stores 1 employee detail

 constructor(private httpClient: HttpClient) { }

 //get all employees
 getAllClients(): Observable<any>
 {
   //https://localhost:44396/api/employees  --put in environment
   return this.httpClient.get(environment.apiUrl + '/api/clients');
 }

 //2  or can use this 
 bindListClients()
 {
   this.httpClient.get(environment.apiUrl + '/api/clients')
   .toPromise().then(
     response=>{
       console.log("from service");
       console.log(response);
       this.clients = response as Client[];
     }
   );
 }

 //get hobbies for binding
 bindListHobbies()
 {
   this.httpClient.get(environment.apiUrl + '/api/hobbies')
   .toPromise().then(
     response=>{
       console.log("from service");
       console.log(response);
       this.hobbies = response as Hobbie[];
     }
   );
 }



  //get hobbies for binding
  bindListHobby()
  {
    this.httpClient.get(environment.apiUrl + '/api/hobbies/gethobby',)
    .toPromise().then(
      response=>{
        console.log("from service");
        console.log(response);
        this.hobbiedetails = response as Hobbiedetails[];
      }
    );
  }

  //get foods for binding
  bindListFoods()
  {
    this.httpClient.get(environment.apiUrl + '/api/foods')
    .toPromise().then(
      response=>{
        console.log("from service");
        console.log(response);
        this.clients = response as Client[];
      }
    );
  }

  getHobbie(): Observable<any>
  {
    return this.httpClient.get(environment.apiUrl + "/api/hobbies/gethobby",{responseType:'text'});
  }


  getmostfood(): Observable<any>
  {
    return this.httpClient.get(environment.apiUrl + "/api/foods");
  }



 //get employee by id
 getClientId(Cid : number) : Observable<any>
 {
   return this.httpClient.get(environment.apiUrl + "/api/clients/" +Cid);
 }

 //insert employee
 insertClient(employee : Client) : Observable<any>
 {
   return this.httpClient.post(environment.apiUrl + "/api/clients",employee);
 }

 //update employee
 updateClient(employee : Client) : Observable<any>
 {
   return this.httpClient.put(environment.apiUrl + "/api/clients",employee);
 }

 //delete employee
 DeleteClient(Cid : number)
 {
   return this.httpClient.delete(environment.apiUrl + "/api/clients/" +Cid);
 }

  //insert employee
  insertUser(users : User) : Observable<any>
  {
    return this.httpClient.post(environment.roleUrl + "/api/users",users);
  }

   //update employee
 updateUser(users : User) : Observable<any>
 {
   return this.httpClient.put(environment.roleUrl + "/api/clients",users);
 }
  //get all employees
  getAllHobbies(): Observable<any>
  {
    //https://localhost:44396/api/employees  --put in environment
    return this.httpClient.get(environment.apiUrl + '/api/hobbies');
  }
}
