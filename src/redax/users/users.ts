import React from "react";
import { Cart } from "../../Classes/Cart";
import { Product } from "../../Classes/Product";
import { ProductList } from "../../Classes/ProductList";

export const manager = {
    name:"Atara",
    password:"3715"
}
export const currentUser = {
 name:"",
    password:""
}


export function checkManger(name:string,pass:string):boolean{
if ( name == manager.name && pass == manager.password){
  return true;
}
return false;
}
export function newUser(name:string,pass:string){
  currentUser.name = name;
  currentUser.password = pass;
  const newUser = new Cart (pass,new ProductList([]));
}

// export function addToCart(product:Product){
//   addProductToUserCart(product)
// }
  


