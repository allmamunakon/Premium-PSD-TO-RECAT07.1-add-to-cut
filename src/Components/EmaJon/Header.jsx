import React from 'react';
import logo from '../EmaJon/Ema/src/images/logo.png';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const divStyle1 = {
    backgroundColor: 'green',
    padding: '20px',
   

}

const divStyle2 = {
    color: 'white',
    height: '50px',


}



const Header = () => {
    return (
        <div className='container' style={divStyle1} >

            <img src={logo} style={divStyle2} alt='' />


            <Navbar className="bg-body-tertiary">
                <Container>
                    <a href="/shop ">shop</a>
           <        a href="/review">Order</a>
                    <a href="/manage">Manage Inventory</a>
           
                </Container>
            </Navbar>


























           
        </div>
    );
};

export default Header;