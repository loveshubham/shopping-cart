export class Product {
    // id!: number;
    _id?:string;
    title?:string;
    // name?: string;
    description?:string;
    imageurl?:string;
    categories?:string;
    size?:string;
    color?:string;
    price!:number;
    qty!: number;

  // value: any;
    // categoryId!:number

constructor(
  _id:string,
  title:string,
  description :string,
  categories:string,
  size:string,
  color:string,
  id:number,
  name:string,
  price:number,
  imageurl:string)

{
    // this.id=id,
    // this.name=name,
    this._id=_id,
    this.title=title,
    this.categories=categories,
    this.size=size,
    this.color=color,
    this.description=description,
    this.price=price,
    this.imageurl=imageurl
    ,
    this.qty= 1
    // this.categoryId=categoryId
    // console.log("produts 16",this.qty)
}
}
