export class Users{

  _id!:number
  // name?:string;
  email?:string;
  isAdmin?:string;
  // username?:string;
  // password?:string;


constructor(
  _id:number,
  //  name:string,
  //  username:string,
   email :string,
   isAdmin:string
  //  password:string
   )
{
  this._id=_id,
  // this.name=name,
  this.email=email,
  this.isAdmin=isAdmin
  // this.username=username,
  // this.password=password
}
}
