import React from 'react';
import {addNewProduct} from "../redax/products/products"
import { ManegerOptions } from './ManegerOptions';


export class AddProduct extends React.Component {
    addProduct(e:any) {
        // React.FormEvent<HTMLFormElement>
        debugger;
        console.log(e.target[0].value)
        console.log(e.target);

        if( e.target[0].value != '' &&  e.target[0].value != undefined ){
            debugger;
           var pCode:string = e.target[0].value;
           var pName:string = e.target[1].value;
           var pColor:string = e.target[2].value;
           var pCategory:string = e.target[3].value;
           var pPrice:number = e.target[4].value;
           var pSrc:string = e.target[5].value;
            addNewProduct(pCode, pName, pColor, pCategory, pPrice, pSrc);
            console.log(e.target[0].value);
            console.log(e.target[1].value);
            console.log(e.target[2].value);
            console.log(e.target[3].value);
            console.log(e.target[4].value);
            console.log(e.target[5].value);
            console.log(e.target[6].value);
            console.log(e.target[7].value);
        }
       

    }
    render() {
        return (
            <div className="main" >
                <ManegerOptions></ManegerOptions>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => this.addProduct(event)}>
                <div className="row">
                {/* <div className="col-50"> */}

                    <input type="text" id="fname" name="firstname" placeholder='enter code of product' />
                    <input type="text" id="fname" name="firstname"placeholder='enter name of product' />
                    <input type="text" id="fname" name="firstname"placeholder='enter color of product' />
                    <input type="text" id="fname" name="firstname"placeholder='enter code of category' />
                    <input type="number" id="fname" name="firstname"placeholder='enter price of product' />
                    <input type="text" id="fname" name="firstname"placeholder='enter src of picture' />
                    <input type="submit" className="btn" value="add product" />
                    </div>
                    {/* </div> */}

                </form>
            </div>
        );
    }
}

{/* <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => this.updateProduct(event)}>
<div className="row">
<div className="col-50">
<input type="text" id="fname" name="firstname" placeholder='enter code of product' />
<input type="text" id="fname" name="firstname"placeholder='enter name of product' />
<input type="text" id="fname" name="firstname" placeholder='enter color of product' />
<input type="text" id="fname" name="firstname" placeholder='enter code of category' />
<input type="number" id="fname" name="firstname" placeholder='enter price of product' />
<input type="text" id="fname" name="firstname" placeholder='enter src of picture' />
<input type="submit" className="btn" value="save" />
</div>
</div>
</form> */}




