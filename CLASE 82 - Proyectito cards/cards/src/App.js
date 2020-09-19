import React, { useState } from 'react';
import './App.css';
import Card from './Componentes/Card/Card';

//LINK Original https://codepen.io/rvelarde/full/VBpaPz

function App() {

  return (
    <React.Fragment>

      <Card>
        <img className='imagen' src= 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/wonder_woman_ver6_xxlg.png'/>
      </Card>

      {/* <Card>
        <img className='imagen' src= 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/Leia_Organa.png'/> 
      </Card>

      <Card>
        <img className='imagen' src= 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/laraCroft.png'/> 
      </Card> */}

    </React.Fragment>
    
  );
}

export default App;
