import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemlookupService {
  itemName = new Subject<string>();

  constructor(private http: HttpClient) {
   }

   getItem(id) {
    return this.http.get(`/items/${id}`);
  }

  fetchAllItems() {
    return this.http.get(`/items`);
  }

  postReview(id, postedReview) {
    console.log("postedReview,",postedReview);
    return this.http.post(`/${id}/reviews`, postedReview, {
      headers: new HttpHeaders({
        'token':  localStorage.getItem('userToken')
      })
    })
  }

  // fetchReviews(id,page,size) {
  //   return this.http.get(`https://jean-zuul-server.herokuapp.com/jean-itemlookup-service/${id}/reviews?page=${page}&size=${size}`)
  // }
  fetchReviews(id) {
    return this.http.get(`https://jean-zuul-server.herokuapp.com/jean-itemlookup-service/${id}/reviews?page=0&size=8`)
  }

}
