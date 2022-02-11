import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shoppingcart/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  userid:any;

  constructor(private activatedRoute:ActivatedRoute,
    private userservice:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userid=data['id'];
      console.log(data)
      console.log("22", this.userid)

    })
    this.userservice.deleteuser(this.userid).subscribe(viewData=>{
      this.userid=viewData;
      // console.log("29", this.userid.Searchedproduct)
      // console.log("29", this.productItem)
    })

  }

}
