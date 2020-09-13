import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Componentes/Header/Header';
import Section from './Componentes/Section/Section';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  return (
    <div className="App" >
      <Header />
      <Section />
      <Footer />   
    </div>
  );
}

export default App;