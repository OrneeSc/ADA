import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import DataContext from '../../Context/DataContext';

const Imagen = () => {
    const {id} = useParams();
    const [imagen, setImagen] = useState({title: ""});
    const {data} = useContext(DataContext);

    useEffect(() => {        
            const img = data.find(i => i.id == id)
            if(!img) {
                console.log("no hay datos")
                console.log(data)
            }
            setImagen(img);
            }, [id]);
    
    return (
        <section id="imagen" className="page-container">
            <h2>Imagen</h2>
            <article>
                <figure>
                <img src={imagen.url} />
                Title: {imagen.title}
                </figure>
            </article>
        </section>
    )
}

export default Imagen;
