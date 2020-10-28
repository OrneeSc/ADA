import React, {Fragment} from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';




const App = () => {
  return (
    <Fragment> 
      <BrowserRouter>
        <Header />

      <Switch>
        <Route exact path="/SobreMi">
          <Page1 />
        </Route>
      
        <Route exact path="/Contacto">
          <Page2 />
        </Route>
  
        <Route exact path="/Estudios">
          <Page3 />
        </Route>

      </Switch>

      
      </BrowserRouter>
    </Fragment>
  
  );
}

export default App;
