export class Product {
    id!: number;
    name?: string;
    description?:string;
    price!:number;
    imageurl?:string;
    qty!: number;
 
constructor( id:number,name:string,description :string,price:number,imageurl:string= 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Rubiks_Cube_%2811913436786%29.jpg')
{
    this.id=id,
    this.name=name,
    this.description=description,
    this.price=price,
    this.imageurl=imageurl,
    this.qty= 1
    console.log("produts 16",this.qty)
}
}
