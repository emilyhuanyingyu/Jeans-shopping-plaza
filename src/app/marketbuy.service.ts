import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MarketbuyService {

  constructor(private http: HttpClient) { }

  addToCart(id){
    return this.http.post(`/auth/v1/cart?item=${id}`, null, {
      headers: new HttpHeaders({
        'token':  sessionStorage.getItem('userToken')
      }), observe: "response"
    })
  }

  fetchCartList(){
    return this.http.get(`/auth/v1/cart/`, {
      headers: new HttpHeaders({
        'token': sessionStorage.getItem('userToken')
      }), observe: 'response'
    })
  }
}
