import React from 'react';
import { removeProduct } from "../redax/products/products"
import { ManegerOptions } from './ManegerOptions';

export class DeleteProduct extends React.Component {

    removeProduct(e: any) {
        // React.FormEvent<HTMLFormElement>
        debugger;
        console.log(e.target[0].value)
        console.log(e.target);

        if (e.target[0].value != '' && e.target[0].value != undefined) {
            debugger;
            removeProduct(e.target[0].value);

        }


    }
    render() {
        return (
            <div className="main" >
                <ManegerOptions></ManegerOptions>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => this.removeProduct(event)}>
                    <input type="text" id="del" placeholder='enter code of product' />
                    <input type="submit" id='delete' value="Delete" />
                </form>
            </div>
        );
    }
}