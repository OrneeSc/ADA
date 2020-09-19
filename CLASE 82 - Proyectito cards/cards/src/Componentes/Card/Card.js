import React, { useState }from 'react';
import './Card.css';


const Card = ({children}) => {

    const [buttonClick, setButtonClick] = useState(true);

    const parrafo = "Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere."

    return(

    <section className='section'>
        {children}
        <section className='contenido' 
            style={{
                width: buttonClick ? "100%" : "290px" 
            }}
        >
        <div className='contenido-texto'>
            <p className='titulo'>Powerful Women</p>
            <h2>WONDER WOMAN</h2>
            <p className='parrafo'>{parrafo}</p>
    
            <h3>LINK</h3>
        </div>
            <div className='div'>
                <button type='button' className='boton' onClick={() => setButtonClick(false)}>
                    <i class="fas fa-window-close"></i>
                </button>
            </div>
            
        </section>
    </section>
)
}

export default Card;