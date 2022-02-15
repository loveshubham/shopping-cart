import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { Users } from '../models/users';


const UserUrl="http://localhost:3001/api/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  updateuser(userId: any , userBody: any):Observable<Users[]>{
    return this.http.put<Users[]>(UserUrl +'/'+ userId, userBody );

  }
  deleteuser(userId:any):Observable<Users[]>{
    return this.http.delete<Users[]>(UserUrl +'/'+ userId);

  }
  getuser():Observable<Users[]>{
    const usersurl="http://localhost:3001/api/user/";
    return this.http.get<Users[]>(usersurl);
  }
  getdetails(Id:any):Observable<Users[]>{
    const usersurl="http://localhost:3001/api/user/";
      return this.http.get<Users[]>(usersurl);

  }

}
