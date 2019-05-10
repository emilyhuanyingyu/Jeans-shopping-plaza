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
  reviewItem = {
    review: '',
    rating: null
  }
  quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  reviews = [];
  itemName: string;
  page: number = 0;
  pageSize: number = 5;
  overallRating: number;
  totalReview: number;
  ratingPercentage: any;


  constructor(private mainService: MainService, private itemService: ItemlookupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get("id");
    })

    this.itemService.getItem(this.itemId).subscribe((data: any) => {
      this.item = data;
      this.itemName = data.name;
      this.overallRating = data.rating;
      this.totalReview = data.reviewCount;
      
      this.ratingPercentage = this.overallRating * 20;
      this.ratingPercentage = this.ratingPercentage.toFixed(2);
      let star = document.getElementById("currentStar").style;
      star.setProperty('--width', this.ratingPercentage + '%')

      this.getReviews();

    })
  }

  getReviews() {
    var passedObject = {
      itemId: this.itemId,
      page: this.page,
      size: this.pageSize
    }
    this.itemService.fetchReviews(passedObject.itemId, this.totalReview).subscribe((res: any) => {
      if (res) {
        res.map((item) => {
          item.date = new Date(item.date).toLocaleString();
        })
        this.reviews = res;
      }
    })
  }

  postReview() {
    this.itemService.itemName.next(this.itemName);
  }

}