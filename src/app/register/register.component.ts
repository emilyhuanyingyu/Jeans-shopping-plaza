import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MainService } from "../main.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  regisDisabled: Boolean = true;
  errMessage: string = '';
  showError: boolean = false;
  token: any;

  constructor(private service: MainService, private router: Router, private FormBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((res) => {
      if (this.registerForm.valid) {
        this.regisDisabled = false;
      } else {
        this.regisDisabled = true;
      }
    })
  }

  createForm() {
    this.registerForm = this.FormBuilder.group({
      regisEmail: ['',
        Validators.compose([
          Validators.required, Validators.pattern("[^ @]*@[^ @]*")
        ])],
      regisUserName: ['',
        Validators.compose([
          Validators.required, Validators.minLength(5)
        ])],
      regisPassword: ['',
        Validators.compose([
          Validators.required, Validators.minLength(5)
        ])],
      cfPassword: ['',
        Validators.compose([
          Validators.required,
        ])]
    })
  }

  get regisemailGetter() {
    return this.registerForm.get('regisEmail')
  }

  get regisUserNameGetter() {
    return this.registerForm.get('regisUserName')
  }

  get regisPasswordGetter() {
    return this.registerForm.get('regisPassword')
  }

  get cfPasswordGetter() {
    return this.registerForm.get('cfPassword')
  }

  getFromValue() {
    let temp: any = {};
    temp.email = this.regisemailGetter.value;
    temp.username = this.regisUserNameGetter.value;
    temp.password = this.regisPasswordGetter.value;
    return temp;
  }

  regisSubmit() {
    let formInput = this.getFromValue();
    this.registerForm.reset();
    this.service.userRegister(formInput).subscribe((data) => {
      console.log("formInput",formInput.email, formInput.password);
      if (data) {
        if (data.status == 201) {
          this.service.userlogin(formInput.email, formInput.password).subscribe((response)=>{
            if (response.status == 200) {
              this.token = response.headers.get('token');
              sessionStorage.setItem('userToken',response.headers.get('token'));
              this.service.loginStatus.next(true);
              this.router.navigate(['/']);
            }
          })
        }

      }
    }, (err) => {
      if (err.status == 400) {
        this.showError = true;
        this.registerForm.reset();
      }
      else {
        this.errMessage = "Something is wrong, please try again"

      }
    })
  }
}
