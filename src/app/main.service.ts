import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentUser = null;
  checkLogin = new Subject<''>();


  constructor(private http: HttpClient) {
    console.log(this.checkLogin);
    // localStorage.currentUser = this.checkLogin;

    // if(localStorage.currentUser !== undefined){
    //   this.currentUser = JSON.parse(localStorage.currentUser)
    //   const data = [{
    //     user: this.currentUser
    //   }]
    // }
    // else{
    //   const data = [{
    //     user: null
    //   }]
    // }
  }

  fetchAllItems() {
    return this.http.get(`/items`);
  }

  getItem(id) {
    return this.http.get(`/items/${id}`);
  }

  getItemRating(id) {
    return this.http.get(`/items` + id + `/rating`);
  }

  userlogin(emailid: string, password: string) {
    return this.http.post<any>(`/login?email=` + emailid + `&password=` + password, {}, { observe: 'response' });
  }

  userRegister(formInput) {
    return this.http.post(`https://jean-userprofile-service.herokuapp.com/register`, formInput, { observe: 'response' });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
