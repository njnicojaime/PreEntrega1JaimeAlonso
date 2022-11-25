import React from 'react';

const Cartwidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-link">                 
                <button className="btnCarrito fas fa-shopping-cart"><span id="contadorCarrito">0</span></button>
            </li>
            
            
        </ul>
    );
}

export default Cartwidget;
