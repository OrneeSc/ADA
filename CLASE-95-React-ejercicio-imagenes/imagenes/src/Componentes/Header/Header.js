import React, { useState, useContext } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import HeaderContext from '../../Context/HeaderContext';
import DataContext from '../../Context/DataContext';


const Header = () => {

    const [user, setUser] = useState(false);
    const {dataDispatch} = useContext(DataContext);

    return (
        <HeaderContext.Provider value={{setUser,dataDispatch}}>
        <header className='header'>
            <h1 className='header-tittle'>Imagenes</h1>
            <button type='button' className='header-button' onClick={() => setUser(true)}>
                Add
            <FontAwesomeIcon icon={faPlus} className='faPlus'/>
            </button>
        </header>
        {
            user ? <Modal /> 
                    : 
                    null
        }
        </HeaderContext.Provider>
    )
}

export default Header;