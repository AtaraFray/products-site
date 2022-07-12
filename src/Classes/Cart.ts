import { Product } from "./Product";
import { ProductList } from "./ProductList";

export class Cart {
    public userPassword: string = '';
    public products: ProductList;

    constructor(
        userPassword:string,
        products:ProductList
    ) {
        this.userPassword = userPassword;
        this.products = products;

    }
    // addProductToUserCart(p:Product){
    //     this.products.addNewProduct(p);


    // }
}
