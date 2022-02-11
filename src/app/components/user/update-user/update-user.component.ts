import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shoppingcart/services/user.service';



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
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {


  UserupdateForm!: FormGroup;
  // hide : boolean = true;


  formValidations = {

    'email': [
      { type: 'required', message: ' required' },
      { type: 'pattern', message: ' incorrect email' },
    ]
  };
  userId: any;
  userdet:any;
  model: any;


  constructor(private builder:FormBuilder,
    private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private routers:Router) { }

  ngOnInit() {


  this.activatedRoute.params.subscribe(data=>{
    this.userId=data['id'];
    this.userservice.getdetails(this.userId).subscribe((data)=>{
      this.userdet=data;
      console.log(this.userdet)
    });
  })
    this. buildForm();

  }


  buildForm(){
      this.UserupdateForm= this.builder.group({
        'email':["", [Validators.required, Validators.pattern(/^([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9]))$/)]],
        'password':["", [Validators.required ,symbolValidator , Validators.minLength(4)]],
      }
      // ,{
        // Validators: passwordMatchValidator
      // }
      );

    }

  Updateuser(){

  console.log("80",this.UserupdateForm.value);
  window.alert('Your product has been added ');
  // console.log(this.userId)
  this.userservice.updateuser(this.userId,this.UserupdateForm).subscribe(data=>{
    console.log(data)
  })

}


}


