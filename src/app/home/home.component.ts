import { Component, OnInit } from '@angular/core';
import { ItemlookupService } from '../itemlookup.service';
import { MarketbuyService } from '../marketbuy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any = [];
  searchText;
  
  constructor(private itemService: ItemlookupService, private marketService: MarketbuyService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    if(this.itemService.allItems) {
      this.items = this.itemService.allItems;
    }
    else {
      this.itemService.fetchAllItems().subscribe((res) => {
        if(res) {
          this.items = res;
          this.itemService.allItems = res;
        }
      })
    }
  }

  addCart(id){
    this.marketService.addToCart(id).subscribe((data) => {
      console.log(data);
      if(data){
        if(data.status === 201){
          console.log("yeaaaaaa");
        }else{
          console.log("nonono");
        }
      }
    })

  }

}
