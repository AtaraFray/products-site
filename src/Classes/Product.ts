import { Category } from "./Category";

export class Product {
    public productCode: string ;
    public productName: string = "";
    public price: number = 0;
    public src: string = "";
    public category: Category ;
    public color: string = "";

     constructor(
        productCode: string,
        productName: string,
        color: string,
        price: number,
        src: string,
        category: Category
       
    ) {
        this.productCode = productCode;
        this.productName = productName;
        this.color = color;
        this.price = price;
        this.src = src;
        this.category = category;
    }
}
