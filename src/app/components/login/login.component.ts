import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoginService } from '../shoppingcart/services/login.service';
import { UserAuthService } from '../shoppingcart/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoginPage!: boolean;
  model:any={}
  constructor(private loginservice:LoginService,
              private router:Router,
              private builder:FormBuilder,
              private userAuthservice:UserAuthService) {
                // this.router.events.pipe(
                //   filter(event => event instanceof NavigationEnd)
                // ).subscribe((event: NavigationEnd)=> {
                //   console.log(event)
                //   this.isLoginPage = this.router.url === '/login';
                // });
               }

  ngOnInit(): void {
    this.buildloginform()

  }

  // login(){

  //   let newproduct={
  //                               id:'',
  //                                // username:this.model.username,
  //     email:this.model.email,
  //     password:this.model.password,
  //     remember:this.model.remember

  //   };
  //   console.log(this.model)

  //   console.log(newproduct);
  //   this.loginservice.Addlogindetail(newproduct).subscribe(data=>{
  //     window.alert('login successful');
  //     console.log(data)
  //   })

  // }
  buildloginform(){
    this.loginForm= this.builder.group({
      'email':["", [Validators.required, Validators.pattern(/^([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9]))$/)]],
      // 'username':["", [Validators.required]],
      'password':[""],
      // 'confirmpassword':["", [Validators.required ,symbolValidator , Validators.minLength(4)]],
    })
  }
 loginfor(){
    console.log("62",this.loginForm.value)
    this.loginservice.Addlogindetail(this.loginForm.value).subscribe((data: any)=>{
      // console.log(data.jwtToken)
      console.log(data)
      console.log(data.user.isAdmin)
      console.log(data.accessToken)

      this.userAuthservice.setRoles(data.user.isAdmin);
      this.userAuthservice.setToken(data.accessToken);
      const role = data.user.isAdmin;
      if(role===true){
        this.router.navigate(['/admin']);
      }
      else {

        this.router.navigate(['/user']);
      }
      window.alert('login successful')
    },(error)=>{
      window.alert('login failed')
      console.log(error);
  })
  }

}
