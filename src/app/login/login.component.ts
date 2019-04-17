import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MainService } from "../main.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  newForm: FormGroup;
  buttonDisabled: boolean = true;
  errMessage: string;
  loggedUser: string;
  token: any;

  constructor(private service: MainService, private router: Router, private FormBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.newForm.valueChanges.subscribe((res) => {
      if (this.newForm.valid) {
        this.buttonDisabled = false;
      } else {
        this.buttonDisabled = true;
      }
    })
  }

  createForm() {
    this.newForm = this.FormBuilder.group({
      myEmail: ['',
        Validators.compose([
          Validators.required, Validators.pattern("[^ @]*@[^ @]*")
        ])
      ],
      myPassword: ['',
        Validators.compose([
          Validators.required, Validators.minLength(5)
        ])
      ]
    })
  }

  get emailGetter() {
    return this.newForm.get('myEmail')
  }
  get passwordGetter() {
    return this.newForm.get('myPassword')
  }

  submit() {
    let formInput = this.getFormValue();
    this.loggedUser = formInput.email;
    this.newForm.reset();
    this.service.userlogin(formInput.email, formInput.password).subscribe((response) => {
      if (response) {
        console.log("response.headers", response.headers.get('token'));
        if (response.status == 200) {
          this.token = response.headers.get('token')
          console.log("token here: ",this.token);
          localStorage.setItem('userToken',response.headers.get('token'));
          this.service.loginStatus.next(true);
          this.router.navigate(['/']);
        }
      }
    }, (err) => {
      console.log(err);
      this.errMessage = "Your email or password don't match our record, please try again"
    })
  }

  getFormValue() {
    let temp: any = {};
    temp.email = this.emailGetter.value;
    temp.password = this.passwordGetter.value;
    return temp;
  }

}