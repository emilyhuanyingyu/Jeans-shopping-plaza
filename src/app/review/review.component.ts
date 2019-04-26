import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemlookupService } from '../itemlookup.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  disabledSubmit: boolean = true;
  itemId:any;
  itemName:string;
  isDisabledBtn:boolean = true;
  count:number = 0;

  constructor(private itemService: ItemlookupService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe((params: Params) => {
     this.itemId = params.id;
   })

   this.itemService.itemName.subscribe((data) => {
     this.itemName = data;
     console.log(this.itemName);
   })
  
  }

  submitReview(passedData) {
    console.log(passedData);
    var id = this.itemId;
    var postedReview = {
      message: passedData.message,
      rating: passedData.rating,
    }
    this.itemService.postReview(id, postedReview).subscribe((res) => {
      if (res) {
        console.log(res);
      }
    })
  }

  detectInput(obj:any) {
    console.log(obj);
    this.isDisabledBtn = obj.message && obj.rating ? false : true;
  }

}
