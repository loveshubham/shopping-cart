import { environment } from "src/environments/environment";

export const baseUrl = environment.production? 'http://api.shoppingcart':'http://localhost:3000';
export const productsurl = `${baseUrl}/products`;
export const cartUrl = `${baseUrl}/cart`;
export const wishlistUrl=`${baseUrl}/wishlist`;

