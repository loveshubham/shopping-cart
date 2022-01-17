export class Product {
    id!: number;
    name?: string;
    description?:string;
    price!:number;
    imageurl?:string;
    qty!: number;
 
constructor( id:number,name:string,description :string,price:number,imageurl:string)
{
    this.id=id,
    this.name=name,
    this.description=description,
    this.price=price,
    this.imageurl=imageurl,
    this.qty= 1
    // console.log("produts 16",this.qty)
}
}
