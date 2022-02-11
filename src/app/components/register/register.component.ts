import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterService} from '../shoppingcart/services/register.service';
/**
 *
 @param form
 *
 */

function passwordMatchValidator(form:any){
  const password= form.get('password')
  const confirmpassword=form.get('confirmPassword')

  if(password.value !==confirmpassword.value){
    confirmpassword.setErrors({passwordMatch:true})
  }
  else{
    confirmpassword.setErrors(null)
  }
  return null
}

// if the data is valid return null else return object

function symbolValidator(control: { hasError: (arg0: string) => any; value: string | string[]; }){
  if(control.hasError('required'))return null;
  if(control.hasError('minlength')) return null;

  // console.log(control.value)
 if(control.value.indexOf('@')>-1){

   return null
 }
  else {
    return { symbol:true}
  }

} 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide : boolean = true;


  formValidations = {
    // 'name': [
    //   { type: 'required', message: 'required' },
    //    { type: 'pattern', message: 'name is incorrect' },
    // ]
    // ,
    'email': [
      { type: 'required', message: ' required' },
      { type: 'pattern', message: ' incorrect email' },
    ],
    // 'username': [
    //   { type: 'required', message: 'name is required' },
    //   { type: 'pattern', message: 'name is incorrect' },
    // ],
    // 'password': [
    //   { type: 'required', message: 'name is required' },
    //   { type: 'pattern', message: 'name is incorrect' },
    // ]
  };


  constructor(private builder:FormBuilder,
    private registerservice:RegisterService ,
    private routers:Router) { }

  ngOnInit() {
    // this.registerForm = new FormGroup({
    //   name :new FormControl('shubham'),
    //   email :new FormControl('shubham@gmail.com'),
    //   username :new FormControl('shubham.ts'),
    //   password :new FormControl('shubham!111'),
    //   confirmpassword :new FormControl('shubham!111')

    // })
    this.buildForm()
  }
  buildForm(){
    this.registerForm= this.builder.group({
      // 'id':[''],
      // 'name':['', [Validators.required ,Validators.minLength(4),Validators.maxLength(30)]],
      'email':["", [Validators.required, Validators.pattern(/^([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9]))$/)]],
      // 'username':["", [Validators.required]],
      'password':["", [Validators.required ,symbolValidator , Validators.minLength(4)]],
      // 'confirmpassword':["", [Validators.required ,symbolValidator , Validators.minLength(4)]],
    },{
      // Validators: passwordMatchValidator
    });
    // console.log("93",this.registerForm.value);
    // this.registerservice.Addregisterdetail(this.registerForm.value).subscribe(data=>{
    //   console.log(data)
      // window.alert('login successful')
  // })
  }
  register(){
    console.log("100",this.registerForm.value)
    this.registerservice.Addregisterdetail(this.registerForm.value).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem('token', res.jwtToken)
      this.routers.navigate(['/shop'])
      window.alert('Registration successful')
  }
  ,
  err=>console.log(err)
  )

  }

}
