export class Register{
 
  // [x: string]: string;
  id!:number
  name?:string;
  email?:string;
  username?:string;
  password?:string;
  // token: string;


constructor(id:number, name:string,username:string,email :string,password:string
  // , token:string
  )
{
  this.id=id,
  this.name=name,
  this.email=email,
  this.username=username,
  this.password=password
  // this.token=token
}
}
