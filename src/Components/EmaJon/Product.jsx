import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'



const Style = {
    // backgroundColor: 'rgb(201, 76, 76)',
    backgroundColor: '#181d21',
    border: '2px solid green',
    height: '100%',
  
    textAlign: 'left',
    padding: '3px'

}
const Style2 = {
    backgroundColor: 'rgb(201, 76, 76)',
    border: '2px solid blue',
   
    textAlign: 'left',
    padding: '5px'

}

const Style3 = {
    backgroundColor: '#daa520',
    color: 'black',
    border: '2px solid red',
    borderRadius: '5px',
    padding: '2px',
    fontSize: '10px'

   
}

const Product = (props) => {
    console.log(props);
    const {img, name, key, category, price, priceFraction, seller, shipping, start, startcount, stock, url, wholePrice} = props.product;

   


    return (
        <div className="container">
            <div className="">
            <div className="row d-flex">
                <div className="col-md-2 border mb-3 ">
                    <img src={img} width='150' height='150' alt='' />

                </div>
                <div className="col-md-7 border">

                    <div className="col-lg-12 mt-2"><h6 style={Style2}>{name}</h6></div>
                    <div className='d-flex' style={Style2}>
                        <div className="col-md-2"><h6 style={Style}>Brand: {category}</h6></div>
                        <div className="col-md-2"><h6 style={Style}>Price: {price}</h6></div>
                        <div className="col-md-2"><h6 style={Style}>Stock: {stock}</h6></div>
                        <div className="col-md-2"><h6 style={Style}>by: {seller}</h6></div>
                        <div className="col-md-2"><h6 style={Style}>startcount: {startcount}</h6></div>
                        <div className="col-md-2"><h6 style={Style}>start: {start}</h6></div>
                    </div>
                    <button className='p-2 me-5' style={Style3} 
                    onClick={()=> props.handleAddProduct(props.product)}
                    > <FontAwesomeIcon icon={faCartShopping} style={{color: "#1116ac",}} />   Add to cart</button>
                </div>





                <div className="border">

            
                </div>


            </div>
            </div>
           
        </div>

    );
};

export default Product;