import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemlookupService } from '../itemlookup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() name:any;
  disabledSubmit: boolean = true;
  itemId:any;
  itemName:string;
  isDisabledBtn:boolean = true;
  count:number = 0;
  errorMessage: string;

  constructor(private itemService: ItemlookupService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.route.params.subscribe((params: Params) => {
     this.itemId = params.id;
   })

   if(this.itemService.itemName.getValue()) {
     this.itemName = this.itemService.itemName.getValue();
   }else{
    // this.router.navigate([`/item/${this.itemId}`]);
   }
  }

  submitReview(passedData) {
    var id = this.itemId;
    var postedReview = {
      message: passedData.message,
      rating: passedData.rating,
    }
    this.itemService.postReview(id, postedReview).subscribe((res: any) => {
      console.log(res);
      if (res) {
        if(res.status == 201){
          this.router.navigate([`/item/${this.itemId}`]);
        }
        if(res.status == 500){
          console.log("500");
        }
        else{
          this.errorMessage = "something is wrong, please try again";
        }
      }
      else{
        this.errorMessage = "something is wrong, please try again";
      }
    })
  }

  detectInput(obj:any) {
    this.isDisabledBtn = obj.message && obj.rating ? false : true;
  }

}
