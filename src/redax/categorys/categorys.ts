import dataCategory from "../../dataCategory.json";
import { CategoryList } from "../../Classes/CategoryList";
import { Category } from "../../Classes/Category";

const categorys: CategoryList = new CategoryList([]);

const d = dataCategory.Category;
for (let index = 0; index < d.length; index++) {
    let c: Category = new Category(d[index].categoryCode, d[index].categoryName)
    categorys.categoryList?.push(c);

}
console.log(categorys);

export default categorys;

export function getCategoryByCode(cCode: string): Category | undefined {
    let c = categorys.getCategoryByCode(cCode);
    return c;
}

export function addCategory(cCode: string, cName: string) {
    let newCategory: Category = new Category(cCode, cName);
    categorys.addNewCategory(newCategory);
}

export function removeCategory(cCode: string) {
    categorys.deleteCategory(cCode);
}



