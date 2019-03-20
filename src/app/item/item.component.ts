import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemId:any;
  item = {
    category: "",
    id: "",
    name: "",
    price: null,
  }
  rating:any;
  quantity= [1,2,3,4,5,6,7,8,9,10];

  constructor(private service: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get("id");
    })

    this.service.getItem(this.itemId).subscribe((data: any) => {
      this.item = data;
    })

    this.service.getItemRating(this.itemId).subscribe((data:any) => {
      this.rating = data;
    })


  }

}