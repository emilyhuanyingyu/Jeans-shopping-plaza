import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: MainService) { }

  ngOnInit() {
    if(this.service.currentUser !== null){
      console.log("this.service.currentUser",this.service.currentUser);
    }
    else{
      console.log("this.service.currentUser is null");
    }
  }

  userLogout(){
    this.service.logout();
  }

}
