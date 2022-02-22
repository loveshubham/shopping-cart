import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../services/messenger.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss']
})
export class OrderstatusComponent implements OnInit {
  response:any;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    this.getmsg();
  }
  printPage() {
    window.print();
  }
  getmsg(){
    this.msg.getMsg().subscribe((data)=>
    this.response=data)
    console.log(this.response)
  }
}
