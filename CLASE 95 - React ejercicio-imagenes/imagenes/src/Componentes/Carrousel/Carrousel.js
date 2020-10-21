import React, {useState, useReducer, useEffect} from 'react';
import './Carrousel.scss';
import reducer, {INIT} from '../../Reducers/Reducers';
import {getImg} from '../../Services/Services';
import Card from '../Card/Card';

const Carrousel = () => {
    const [data, dataDispatch] = useReducer(reducer,[]);

    useEffect(() => {
        const promise = getImg();
        promise.then(data => dataDispatch({ type: INIT, init: data }));
    }, []);


    return (
        <div className='carrousel'>
            {
                data.slice(-10).reverse().map(img => {
                    return (
                        <Card>
                            <figure className='figure' key={img.id}>
                                <img width='200px' height='120px'
                                src={img.url} className='imagen'/>
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