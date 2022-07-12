import { Category } from "./Category";
export class CategoryList {
   public categoryList: Array<Category> ;

    constructor(
        categoryList: Array<Category>,
    ) {
        this.categoryList = [];
    }

    addNewCategory(newCategory:Category): void {
        this.categoryList.push(newCategory);
    }
    deleteCategory(categoryCode:string): void {
        let x =  this.categoryList.findIndex((c) => c.categoryCode == categoryCode);
        this.categoryList.splice(x, 1);
    }
    getCategoryByCode(code:string):Category | undefined{
        let c =  this.categoryList.find((c) => c.categoryCode == code);
         return c ;
    }
 
}





