import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  fetchAllItems(){
    return this.http.get(`/items`);
  }

  getItem(id){
    return this.http.get(`/items/${id}`);
  }

  getItemRating(id){
    return this.http.get(`/items`+id+`/rating`);
  }


}
