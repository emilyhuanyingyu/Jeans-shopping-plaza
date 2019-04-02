import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any = [];
  searchText;
  
  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.fetchAllItems().subscribe((data) => {
      this.items = data;
    })
  }

}
