export class Product {
    id!: number;
    name?: string;
    description?:string;
    price!:number;
    imageurl?:string;
    qty!: number;
    // categoryId!:number

constructor( id:number,name:string,description :string,price:number,imageurl:string)
{
    this.id=id,
    this.name=name,
    this.description=description,
    this.price=price,
    this.imageurl=imageurl,
    this.qty= 1
    // this.categoryId=categoryId
    // console.log("produts 16",this.qty)
}
}
