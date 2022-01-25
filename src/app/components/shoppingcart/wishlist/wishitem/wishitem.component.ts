import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-wishitem',
  templateUrl: './wishitem.component.html',
  styleUrls: ['./wishitem.component.scss']
})
export class WishitemComponent implements OnInit {
  @Input() wishItem:any
  constructor() { }

  ngOnInit(): void {
    // console.log(this.wishItem)
  }

}
