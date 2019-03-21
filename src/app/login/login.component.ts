import { Component, OnInit } from '@angular/core';
import { MainService} from '../main.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http : MainService) { }

  ngOnInit() {
  }

  handleLogin(email, password){
    this.http.login(email, password)
              .subscribe( data => {
                console.log(data);
                if(data.status == 200){
                  alert("successfully logged in");
                }
              })  
  }


}
