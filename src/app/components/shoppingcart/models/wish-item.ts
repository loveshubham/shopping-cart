import { Product } from "./product";

export class WishItem {
    id!:number;
    productId!: number;
    productName?:string;
    qty!: number;
    price!:number;

    constructor(id:number, product: Product){
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
    }

}
