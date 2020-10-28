import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faUserGraduate, faPhone, faLaugh } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        
        <header className="main-header">

           <div className="logo-header">
           <FontAwesomeIcon icon={faFemale} className='faFemale' / >  
           <h1>Ornella Sciarrillo</h1>
           </div>

           <div className="text-header">
            <nav>
                
                <Link to="/SobreMi">Sobre Mi</Link> 
                <FontAwesomeIcon icon={faLaugh} className='faIcons' / >  
                <Link to="/Contacto">Contacto</Link>
                <FontAwesomeIcon icon={faPhone} className='faIcons' / >
                <Link to="/Estudios">Estudios</Link>
                <FontAwesomeIcon icon={faUserGraduate} className='faIcons' / > 
            </nav>
            </div>
        </header>
    )
};

export default Header;
