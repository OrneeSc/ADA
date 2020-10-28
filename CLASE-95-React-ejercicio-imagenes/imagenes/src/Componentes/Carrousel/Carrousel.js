import React, {useContext} from 'react';
import './Carrousel.scss';
import Card from '../Card/Card';
import DataContext from '../../Context/DataContext';
import {Link} from 'react-router-dom';

const Carrousel = () => {

    const {data} = useContext(DataContext);

    return (
        <div className='carrousel'>
            {
                data.slice(-10).reverse().map(img => {
                    return (
                        <Card>
                            <figure className='figure' key={img.id}>
                                <img width='200px' height='120px'
                                src={img.url} className='imagen'/>
                                    <Link to={`/imagen/${img.id}`}>Ir a la imagen</Link>
                                    <figcaption>
                                        <p>{img.title}</p>
                                    </figcaption>
                            </figure>
                        </Card> 
                    )
                })
            }
        </div>
    )
}

export default Carrousel;