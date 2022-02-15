import { Product } from "./product";

export class CartItem {
    // id!:number;
    product:any;
    productId?: string;
    producttitle?:string;
    quantity!: number;
    price!:number;
    // imageurl?:string;
    subtotal!:number;

    constructor(
      // productId:string,
       product:Product ,
       quantity:number,
       subtotal:number
       )
       {
        // this.id = id;
        // this.productId = productId;
        // this.producttitle=product.title,
        this.product = product;
        this.quantity = quantity;
        this.subtotal =subtotal;
        // this.price = product.price;
        // this.imageurl=product.imageurl;
    }

}
