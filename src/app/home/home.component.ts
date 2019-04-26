import { Component, OnInit } from '@angular/core';
import { ItemlookupService } from '../itemlookup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any = [];
  searchText;
  
  constructor(private itemService: ItemlookupService) { }

  ngOnInit() {
    this.itemService.fetchAllItems().subscribe((data) => {
      this.items = data;
    })
  }

}
