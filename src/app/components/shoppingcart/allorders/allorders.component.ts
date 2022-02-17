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
  products: any;
  status!:any;
  model:any={};
  popup:any=false;
  newdata: any;
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
deletetodo(orderId:any){
    // this.todelete.emit(product);
    // console.log(product)

    this.orderservice.removeorder(orderId).subscribe(viewData=>{
    this.products=viewData});


    // window.location.reload();




}
splice(items:any){
  const index= this.cartItems.userOrder.indexOf(items)
  this.cartItems.userOrder.splice(index,1)
}

statusorder(userId:any)
{let data={
  status:this.model.status
};
console.log(data)
console.log(userId)
  this.orderservice.orderstat(userId,data).subscribe(data=>{
    console.log(data)});

}
}
