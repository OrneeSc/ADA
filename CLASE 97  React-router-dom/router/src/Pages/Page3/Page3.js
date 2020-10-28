import React from 'react';
import './Page3.css';

const titulo1 = 'Ada ITW - (Febrero 2020 - en curso)';
const text1 = 'Desarrolladora Web Frontend. 400 horas. HTML5, CSS3, Sass, Javascript - ES6, Git, GitHub, React.Js, Responsive Design';

const titulo2 = 'Tea Imagen - (2015 - 2017)';
const text2 = 'Técnica Superior en Producción Integral de TV y Servicios Audiovisuales';

const titulo3 = 'Colegio Claret - (2008 - 2012)';
const text3 = 'Bachillerato con orientación en Cs. Sociales y de la Comunicación';

const Page3 = () => {
    return (
        <section id="page3" className="page3">
            <h2>{titulo1}</h2>
                <p>{text1}</p>
            <h2>{titulo2}</h2>
                <p>{text2}</p>
            <h2>{titulo3}</h2>
                <p>{text3}</p>
        </section>
    )
};

export default Page3;
