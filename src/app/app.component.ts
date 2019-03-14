import { Component } from '@angular/core';
import { MainService } from "./main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.fetchAllItems().subscribe((data) => {
      console.log(data);
    })
  }


}
