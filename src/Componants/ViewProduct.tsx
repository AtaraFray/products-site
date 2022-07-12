
import React, { Fragment } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCard, MDBInput, MDBBtn, MDBFormInline, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Product } from "../Classes/Product";
import products from "../redax/products/products";
import '../view.css'
import { Link } from 'react-router-dom';
// import { addToCart } from '../redax/users/users';

type MyState = {
    productsArray: Array<Product>;
};

export class ViewProduct extends React.Component<{}, MyState> {

    state: MyState = {
        productsArray: products.productList,
    };

    filt(e: any) {
        debugger
        let word = e.target.value;
        word = word.toUpperCase();
        var temp = this.state.productsArray.filter(p => p.productName.toUpperCase().includes(word));
        this.setState({ productsArray: temp });
        console.log(this.state.productsArray);
    }
    // addProductToCart(p:Product){
    //  addToCart(p);
    // }

    render() {
        return (
            <div className="main" >
                <MDBCol md="6">
                    <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" onChange={(e) => this.filt(e)} />
                </MDBCol>
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    {
                        this.state.productsArray.length > 0 &&
                        this.state.productsArray.map((item) => (
                            <>
                                <div className="card">
                                    <img src={item.src} />
                                    <h5>{item.productName}</h5>
                                    <p className="price">{item.price}$</p>
                                    <p>{item.color}</p>
                                    <p><button className='more' >
                                    <Link to={"/ViewProduct/product-details" + ( item.productCode )}>{'read more'} </Link>
                                        <p><i className="arrow right"></i></p></button></p>
                                    <p><button className='cart' 
                                    // onClick={()=>this.addProductToCart(item)}
                                    >Add to Cart</button></p>
                                </div>
                              

                            </>
                        ))
                    }

                </div>


            </div>
        );
    }
}


