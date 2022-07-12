import { Product } from "./Product";

export class ProductList {
    public productList: Array<Product>;

    constructor(
        productList: Array<Product>,
    ) {
        this.productList = [];
    }

    public addNewProduct(newProduct: Product): void {
        debugger;
        console.log(newProduct);
        console.log(this.productList.push(newProduct));
        this.productList.push(newProduct);

    }
    public deleteProduct(productCode: string): void {
        let x = this.productList.findIndex((p) => p.productCode == productCode);
        this.productList.splice(x, 1);
    }
    editProduct(pCode: string, pName: string, pColor: string, pCategory: string, pPrice: number, pSrc: string): string {
        let x = this.productList.findIndex((p) => p.productCode == pCode);
        if (x >= 0) {
            this.productList[x].category.categoryCode = pCategory;
            this.productList[x].color = pColor;
            this.productList[x].price = pPrice;
            this.productList[x].productName = pName;
            this.productList[x].src = pSrc;
            return 'product updated'
        }
        else {
            return 'updated fail'

        }

    }
}
