import React from "react";
import dataProduct from "../../dataProduct.json";
import { ProductList } from "../../Classes/ProductList";
import { Product } from "../../Classes/Product";
import { CategoryList } from "../../Classes/CategoryList";
import { Category } from "../../Classes/Category";
import { getCategoryByCode } from "../categorys/categorys";

const products: ProductList = new ProductList([]);

const d = dataProduct.Products;
for (let index = 0; index < d.length; index++) {
    let c = getCategoryByCode(String(d[index].category));
    if (c != undefined) {
        let p: Product = new Product(d[index].productCode, d[index].productName, d[index].color, Number(d[index].price), d[index].src, c)
        products.productList?.push(p);
    }
}
console.log(products);

export default products;


export function addNewProduct(pCode: string, pName: string, pColor: string, pCategory: string, pPrice: number, pSrc: string) {
   let c = getCategoryByCode(pCategory);
   debugger;
   if (c != undefined){
    let newProduct: Product = new Product(pCode, pName, pColor, pPrice, pSrc, c);
    products.addNewProduct(newProduct);
    console.log(products);
    
   }
}
export function removeProduct(pCode: string) {
    products.deleteProduct(pCode);
}

export function updateProductDeatails(pCode: string ,pName: string,pColor: string,pCategory: string,pPrice: number,pSrc: string) {
   var massege:string = products.editProduct(pCode,pName,pColor,pCategory,pPrice,pSrc);
   
}




