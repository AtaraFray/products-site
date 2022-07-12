import { parse } from 'node:path/win32';
import React, { Component } from 'react';
import { NavigateOptions, Params } from 'react-router-dom';
import  products  from '../redax/products/products';
import ForRouter from './ForRouter';
const ProductDeatails = ForRouter( class Details extends Component<IForRouter>{
    currentId = parseInt(this.props.params.id? this.props.params.id: "0")-1;

    nameP = products.productList[this.currentId].productName;
    id = products.productList[this.currentId].productCode;
    price = products.productList[this.currentId].price.toString();
    color = products.productList[this.currentId].color;

    state = {
        code:products.productList[this.currentId].productCode,
        name: products.productList[this.currentId].productName,
        price: products.productList[this.currentId].price,
        color: products.productList[this.currentId].color,
        catrgory: products.productList[this.currentId].category.categoryName,
        src: products.productList[this.currentId].src

    }

    render() {
        return(
            <>
            <div className='space2'></div>
                <div className="card" id='oneCard'>
                    <img src={this.state.src} />
                    <h5>{this.state.name}</h5>
                    <p>code:{this.state.code}</p>
                    <p>category:{this.state.catrgory}</p>
                    <p className="price">price : 4$</p>
                    <p>color:{this.state.color}</p>
                    <p style={{ display: "flex", justifyContent: "flex-end", flexWrap: "wrap", width: "90%" }}>
                        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "150px" }}>
                            <button style={{ borderRadius: "50%", border: "0px", backgroundColor: "red", height: "20px", width: "20px" }}></button>
                            <button style={{ borderRadius: "50%", border: "1px black solid", backgroundColor: "white", height: "20px", width: "20px" }}></button>
                            <button style={{ borderRadius: "50%", border: "0px", backgroundColor: "black", height: "20px", width: "20px" }}></button>
                            <button style={{ borderRadius: "50%", border: "0px", backgroundColor: "deeppink", height: "20px", width: "20px" }}></button>
                            <button style={{ borderRadius: "50%", border: "0px", backgroundColor: "blue", height: "20px", width: "20px" }}></button>
                            <button style={{ borderRadius: "50%", border: "0px", backgroundColor: "turquoise", height: "20px", width: "20px" }}></button>
                            <br></br>
                        </div>
                    </p>
                </div>
            </>      
        )
    }
}
)
export default ProductDeatails;
export interface IForRouter  {
    location: Location,
    navigate: NavigateOptions,
    params: Params<string>,
}