import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.component.html',
  styleUrls: ['./forgetpw.component.css']
})
export class ForgetpwComponent implements OnInit {
  disabledButton: boolean = true;
  passedEmail: any;
  instruction: string = "";


  constructor(private service: MainService) { }

  ngOnInit() {
    this.passedEmail = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]))
    })

    this.emailGetter.valueChanges.subscribe((data) => {
      if (data) {
        if (this.passedEmail.valid) {
          this.disabledButton = false;
        }
        else {
          this.disabledButton = true;
        }
      }
    })
  }

  resetbyEmail(email) {
    console.log("resetPWbyEmail", email);
    this.service.resetPwbyEmail(email).subscribe((data) => {
      console.log(data);
      if (data) {
        this.instruction = "If you have an account, you'll receive instructions for resetting your password at " + data;
        document.getElementById("toggleForm").style.display = "none";
      }
    })
  }

  get emailGetter() {
    return this.passedEmail.get("emailid")
  }

}
