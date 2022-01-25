export class Logindetails{
  username?:string;
  email?:string;
  password?:string;
  remember!:boolean;

constructor( username:string,email :string,password:string, remember:boolean)
{
  this.username=username,
  this.email=email,
  this.password=password,
  this.remember=remember
}
}

