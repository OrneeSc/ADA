import React from 'react'; // va siempre acá
import './Section.scss';


const Section = () => {
    return (
        <section className="contenedor">
            <article className='contenedor-texto'>
                <h2 className="titulo-pequeño">Happy Day!</h2>
                <p className="parrafo">El Día del Programador homenajea a todos aquellos que trabajan para que nuestros dispositivos electrónicos, entre otras cosas, funcionen a la perfección y es una fecha que nace en Rusia por una petición del programador Valentin Balt.</p>

                <p className="parrafo">Este empleado de la compañía de diseño web Parallel Technologies quería lograr que el festejo caiga en el día 256 del año ya que con un código de ocho bits se puede representar esa cantidad de caracteres diferentes. Por eso la celebración varía entre el 13 de septiembre o el 12 de septiembre, si es un año bisiesto, como el 2020.</p>

                <p className="parrafo">El 24 de julio de 2009, el Ministro de Comunicaciones de Rusia redactó un borrador de ley para crear la nueva festividad, el Día del Programador. El 11 de septiembre de 2009, el Presidente de Rusia, Dmitri Medvédev firmó el decreto.</p>
            </article>
            <figure className="dia-programador">
                <img src="https://bucket3.glanacion.com/anexos/fotos/16/3388916w1033.jpg"></img>
            </figure>           
        </section>       
    )
}
export default Section; 