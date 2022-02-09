import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindetails } from '../models/logindetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl='http://localhost:3001/api/auth/login'
  // const loginUrl='http://localhost:3000/Login'
  requestHeader= new  HttpHeaders(
  {"No-auth":"True"}
  );
  constructor(private http:HttpClient ,
    private userauth:UserAuthService) {}

    Addlogindetail(user:any):Observable<Logindetails>{
    return this.http.post<Logindetails>(this.loginUrl , user ,
       {headers:this.requestHeader}
       );


}
public roleMatch(allowedRole:any):any
{
let ismatch=false;
const userroles:any = this.userauth.getRoles();


// if (userroles != null && userroles) {
// for (let i = 0; i < userroles.length; i++) {
//   for (let j = 0; j < allowedRole.length; j++) {
    if (userroles === allowedRole) {
      ismatch = true;
      return ismatch;
    }
    else {
      return ismatch;
    }




// if(userroles=="true" && allowedRole==true){
//   ismatch=true;
// }
// else{
//   return ismatch=false;
// }
}
// }
// }
// }

loggedIn(){
  return !!localStorage.getItem('token')

}
}
