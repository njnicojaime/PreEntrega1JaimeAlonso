import React from 'react';
import Dropdown from './Dropdown';

const Categorias = () => {
    return (
            
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
                
            </li>                        
                <Dropdown/>                
                            
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
            </li>            
      </ul>
    );
}

export default Categorias;