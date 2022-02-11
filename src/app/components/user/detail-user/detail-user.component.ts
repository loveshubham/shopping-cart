import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../shoppingcart/services/user.service';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
 @Input() userItem:any;
  userDetails:any;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    console.log(this.userItem)

    this.loaduser()
  }
  loaduser(){
    this.userDetails=this.userItem;
    // console.log(this.userDetails)
    // console.log(this.userItem)
  }

}
