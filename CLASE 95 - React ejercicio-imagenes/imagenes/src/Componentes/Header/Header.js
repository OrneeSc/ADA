import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-tittle'>Imagenes</h1>
            <button type='button' className='header-button'>
                Add
            <FontAwesomeIcon icon={faPlus} className='faPlus'/>
            </button>
        </header>
    )

}

export default Header;