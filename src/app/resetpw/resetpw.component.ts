import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MainService } from "../main.service";
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {
  formdata:any;
  id:any;
  token:any;
  errMessage: boolean = false;;

  constructor(private service: MainService, private router: Router, private route: ActivatedRoute, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get("id");
    this.token = this.route.snapshot.queryParamMap.get("token");
    console.log(this.id, this.token);

    this.formdata = new FormGroup({
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      confirmPassword: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    })
  }

  get pwGetter(){
    return this.formdata.get("password")
  }

  get confirmpwGetter(){
    return this.formdata.get("confirmPassword")
  }

  resetSubmit(passedData){
    if(passedData.password === passedData.confirmPassword){
      this.service.resetPassword(this.id, this.token, passedData.password).subscribe((res) => {
        if(res){
          if(res.status == 200){
            this.router.navigate(['/signin']);
          }
        }
      }, (err)=>{
        console.log(err);
        this.errMessage = true;
        this.formdata.reset();
      })
    }
  }

}
