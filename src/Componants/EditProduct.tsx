import React from 'react';
import { Product } from "../Classes/Product";
import {updateProductDeatails} from "../redax/products/products"
import { ManegerOptions } from './ManegerOptions';

export class EditProduct extends React.Component {

    updateProduct(e:any) {
        // React.FormEvent<HTMLFormElement>
        debugger;
        if( e.target[0].value != '' &&  e.target[0].value != undefined ){
            debugger;
           var pCode:string = e.target[0].value;
           var pName:string = e.target[1].value;
           var pColor:string = e.target[2].value;
           var pCategory:string = e.target[3].value;
           var pPrice:number = e.target[4].value;
           var pSrc:string = e.target[5].value;
           let update ={
            productCode : pCode,
            productName : pName,
            color : pColor,
            price : pPrice,
            src : pSrc,
            category : pCategory
           };
           updateProductDeatails(pCode,pName,pColor,pCategory,pPrice,pSrc);
            
        }
       

    }
    render() {
        return (
            <div className="main" >
               <ManegerOptions></ManegerOptions>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => this.updateProduct(event)}>
                    <div className="row">
                    {/* <div className="col-50"> */}
                    <input type="text" id="fname" name="firstname" placeholder='enter code of product' />
                    <input type="text" id="fname" name="firstname"placeholder='enter name of product' />
                    <input type="text" id="fname" name="firstname" placeholder='enter color of product' />
                    <input type="text" id="fname" name="firstname" placeholder='enter code of category' />
                    <input type="number" id="fname" name="firstname" placeholder='enter price of product' />
                    <input type="text" id="fname" name="firstname" placeholder='enter src of picture' />
                    <input type="submit" className="btn" value="save" />
                    </div>
                    {/* </div> */}
                </form>
            </div>
        );
    }
}
