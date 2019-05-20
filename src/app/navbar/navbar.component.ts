import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged: boolean;

  constructor(private service: MainService, private router: Router) { }

  ngOnInit() {
    if(sessionStorage.userToken !== undefined){
      this.userLogged = true;
    }else{
      this.userLogged = false;
    }
    
    this.service.loginStatus.subscribe((data) => {
      if(data){
        if(data == true){
          this.userLogged = true;
        }
        else{
          this.userLogged = false;
        }
      }
    })
  }

  userLogout(){
    sessionStorage.removeItem('userToken');
    this.userLogged = false;
    this.router.navigate([''])
  }

}
