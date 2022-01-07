import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms'; 
/** 
  @param form 
 */

function passwordMatchValidator(form:any){
  const password= form.get('password')
  const confirmpassword=form.get('confirmPassword') 

  if(password.value !==confirmpassword.value){
    confirmpassword?.setErrors({passwordMatch:true})
  }
  else{
    confirmpassword?.setErrors(null)
  }
  return null
}

// if the data is valid return null else return object

function symbolValidator(control: { hasError: (arg0: string) => any; value: string | string[]; }){
  if(control.hasError('required'))return null;
  if(control.hasError('minlength')) return null;

  console.log(control.value)
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

  formValidations = {
    'name': [
      { type: 'required', message: 'required' },
       { type: 'pattern', message: 'name is incorrect' },
    ]
    ,
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


  constructor(private builder:FormBuilder) { }

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
      name:['', [Validators.required]],
      email:["", [Validators.required, Validators.pattern(/^([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9]))$/)]],
      username:["", [Validators.required]],
      password:["", [Validators.required ,symbolValidator , Validators.minLength(4)]],
      confirmpassword:"",
    },{
      Validators: passwordMatchValidator
    })
  }
  register(){
    console.log(this.registerForm.value)
  }

}
