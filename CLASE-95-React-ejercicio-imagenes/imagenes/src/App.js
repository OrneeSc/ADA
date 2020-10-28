import React, { useEffect, useReducer, Fragment } from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Container from './Componentes/Container/Container';
import DataContext from './Context/DataContext';
import reducer, {INIT} from './Reducers/Reducers';
import {getImg} from './Services/Services';
import Imagen from './Componentes/Imagen/Imagen';
import Carrousel from './Componentes/Carrousel/Carrousel';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {

  const [data, dataDispatch] = useReducer(reducer,[]);

    useEffect(() => {
        const promise = getImg();
        promise.then(data => dataDispatch({ type: INIT, init: data }));
    }, []);


  return (
    <Fragment>
      <BrowserRouter>
        <DataContext.Provider value={{data, dataDispatch}}>
          <Header />
        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route exact path="/imagen/:id" component={Imagen} />
        </Switch>
        </DataContext.Provider>
      </BrowserRouter>
    </Fragment>
  
  );
}

export default App;
