import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shoppingcart/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any={}
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  }
  // login(){

  //   console.log(this.model)
  // }
  login(){
    console.log(this.model)
    let newproduct={
      id:'',
      username:this.model.username,
      email:this.model.email,
      password:this.model.password,
      remember:this.model.remember

    };
    console.log(newproduct);
    this.loginservice.Addlogindetail(newproduct).subscribe(data=>{
      window.alert('login successful');
      console.log(data)
    })

  }
}
