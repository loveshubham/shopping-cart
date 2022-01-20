import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Categories } from '../filters/categories';

const apiUrl='http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
//  products:Product[] =[
//     new Product(1,1,'product 1','this is the product description',100),
//     new Product(2,1,'product 2','this is the product description',200),
//     new Product(3,1,'product 3','this is the product description',300),
//     new Product(4,1,'product 4','this is the product description',400),
//     new Product(5,1,'product 5','this is the product description',500),
//     new Product(6,1,'product 6','this is the product description',600),
//     new Product(7,1,'product 7','this is the product description',700),
//     new Product(8,1,'product 8','this is the product description',800),
// ]

  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    //:ToDO get products from an api and return an observable
    return this.http.get<Product[]>(apiUrl);
  }
  Addproduct(productBody:any):Observable<Product[]>{
    return this.http.post<Product[]>(apiUrl , productBody);

  }
  updateproduct(productId: string , productBody: any):Observable<Product[]>{
    return this.http.put<Product[]>(apiUrl +'/'+ productId, productBody );

  }
  deleteproduct(productId: string):Observable<Product[]>{
    return this.http.delete<Product[]>(apiUrl +'/'+ productId);

  }
  searchbycatproduct(categoryId: string):Observable<Product[]>{
    const caturl="http://localhost:3000/products/category="+categoryId
    return this.http.get<Product[]>(caturl);

  }
  searchbydateproduct(dateParam: string):Observable<Product[]>{
    const caturl="http://localhost:3000/products/date="+dateParam;
    return this.http.get<Product[]>(caturl);

  }
  productdetail(productId:any):Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl +'/'+ productId);

  }
  getcategory(){
    const categoryUrl="http://localhost:3000/categories"
    return this.http.get<Categories>(categoryUrl);
  }
}
