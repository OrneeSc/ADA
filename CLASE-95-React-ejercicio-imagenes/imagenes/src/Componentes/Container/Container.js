import React from 'react';
import Carrousel from '../Carrousel/Carrousel';
import './Container.scss';


const Container = ({children}) => {
    return (
        
        <div className='container'>
            <Carrousel>
            {children}
            </Carrousel>
        </div>
        
    )
}

export default Container;