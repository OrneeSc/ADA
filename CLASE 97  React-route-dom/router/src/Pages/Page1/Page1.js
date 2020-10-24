import React from 'react';
import './Page1.css';

const titulo = 'Desarrolladora Frontend y Productora Audiovisual';
const text = 'Soy resolutiva, responsable y me gusta trabajar en equipo. Siempre dispuesta a enfrentar nuevos desafíos, y a seguiraprendiendo para perfeccionarme y poder insertarme laboral y profesionalmente como Desarrolladora Frontend'

const Page1 = () => {
    return (
        <section id="page1" className="page1">
            <h2>{titulo}</h2>
                <p>{text}</p>
        </section>
    )
};

export default Page1;
