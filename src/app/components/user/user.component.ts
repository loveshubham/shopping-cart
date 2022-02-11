import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shoppingcart/services/user.service';






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userlist:any;


  constructor(  private userservice:UserService,
    private http:HttpClient) { }

  ngOnInit() {

    this.loadusers();
  }

  loadusers(){
    this.userservice.getuser().subscribe((products)=>{
      this.userlist=products;
      console.log(this.userlist)
    })
  }


}
