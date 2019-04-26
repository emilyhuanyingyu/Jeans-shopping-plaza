import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemlookupService } from '../itemlookup.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemId: any;
  item = {
    category: "",
    id: "",
    name: "",
    price: null,
  }
  quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  reviewItem = {
    review: '',
    rating: null
  }
  reviews: any;
  itemName: string;

  constructor(private mainService: MainService, private itemService: ItemlookupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get("id");
    })

    this.itemService.getItem(this.itemId).subscribe((data: any) => {
      this.item = data;
      this.itemName = data.name;
    })

    this.getReviews();
  }

  getReviews() {
    var passedObject = {
      itemId: this.itemId,
      page: 0,
      size: 3
    }
    this.itemService.fetchReviews(passedObject.itemId).subscribe((res:any) => {
      if (res) {
        res.map((item) => {
          item.date = new Date(item.date).toLocaleString();
        })
        this.reviews = res;
      }
    })
  }

  postReview(){
    console.log(this.itemName);
    this.itemService.itemName.next(this.itemName);
  }
}