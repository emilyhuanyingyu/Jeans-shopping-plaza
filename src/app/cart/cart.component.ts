import { Component, OnInit } from '@angular/core';
import { MarketbuyService } from '../marketbuy.service';
import { ItemlookupService } from '../itemlookup.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  cartDetails: any = [];
  cartItemsId = [];
  items: any;

  constructor(private marketService: MarketbuyService, private itemService: ItemlookupService) { }

  ngOnInit() {
    if (this.itemService.allItems) {
      this.items = this.itemService.allItems;
      this.getCartList();
    } else {
      this.itemService.fetchAllItems().subscribe((res) => {
        this.items = res;
        this.getCartList();
      });
    }
  }

  getCartList(){
    this.marketService.fetchCartList().subscribe((res) => {
      this.cartItems = res.body;
      this.cartItems.forEach(element => {
        this.cartItemsId.push(element.itemNumber);
      });

      this.items.forEach((item) => {
        this.cartItemsId.forEach((itemnum) => {
          if(item.id === itemnum) {
            this.cartDetails.push(item);
          }
        })
      })
      console.log(this.cartDetails);
    })
  }

}
