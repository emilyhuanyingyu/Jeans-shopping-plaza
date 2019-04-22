import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  loginStatus = new Subject<boolean>();

  constructor(private http: HttpClient) {
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

  // userRegister(formInput) {
  //   return this.http.post(`https://jean-userprofile-service.herokuapp.com/register`, formInput, { observe: 'response' });
  // }
  userRegister(formInput) {
    return this.http.post(`/register`, formInput, { observe: 'response' });
  }

  resetPwbyEmail(data){
    console.log("22",data.emailid, typeof(data));
    return this.http.post(`/user/resetPassword?email=`+data.emailid, { observe: 'response' });
  }

  resetPassword(id:any, token:any, password:any){
    return this.http.post(`user/changePassword?id=`+id+`&newPW=`+password+`&token=`+token,{}, {observe: 'response'})
  }


  
}
