import React from "react";
import { Link } from "react-router-dom";
import '../css.css';
export class ManegerOptions extends React.Component {

    render() {
        return <>
        <div id="one">

        </div>
            <div id="manager">
                <div className="divs"></div>
                <Link to="/ManegerOptions/Addproduct" className="linkEnter" >Add product</Link>
                <div className="divs"></div>
                <Link to="/ManegerOptions/DeleteProduct" className="linkEnter">Delete Product</Link>
                <div className="divs"></div>
                <Link to="/ManegerOptions/EditProduct" className="linkEnter" >Edit Product</Link>
            </div>
        </>
    }
  
}
