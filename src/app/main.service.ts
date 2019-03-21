import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  fetchAllItems() {
    return this.http.get(`/items`);
  }

  getItem(id) {
    return this.http.get(`/items/${id}`);
  }

  getItemRating(id) {
    return this.http.get(`/items` + id + `/rating`);
  }

  login(userEmail: string, password: string) {
    return this.http.post<any>('/login?email=' + userEmail + '&password=' + password, {}, { observe: 'response' })
  }

}
