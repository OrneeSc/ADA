import React from 'react';
import './Page2.css';

const text = 'ornee.sci@gmail.com';
const text2 = '1133600710';

const Page2 = () => {
    return (
        <section id="page2" className="page2">
            <h2>Mail</h2>
                <p>{text}</p>
            <h2>Celular</h2>
            <p>{text2}</p>
        </section>
    )
};

export default Page2;
