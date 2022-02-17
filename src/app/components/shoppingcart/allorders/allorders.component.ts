import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  cartItems:any = [];
  userId:any;
  constructor(private orderservice:OrdersService,
    private http:HttpClient,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(data=>{
     this.userId=data['id'];
    console.log("22", this.userId)

    })
    this.orderservice.getorderItem(this.userId).subscribe((items:any)=>{
  this.cartItems=items;
  console.log(this.cartItems)


})

}
}
