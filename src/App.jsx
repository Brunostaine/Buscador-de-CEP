// import React from 'react';
import { FiSearch } from "react-icons/fi";
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP aqui"
         />

         <button className="buttonSearch">
            <FiSearch size={25} color="#fff"/>
         </button>
      </div>

      <main className="main">
        <h2>CEP: 79001123</h2>

        <span>Rua de teste</span>
        <span>Complemento: não tem</span>
        <span>jardin bonito</span>
        <span>Brasília - DF</span>
      </main>
      
    </div>

  );
}

export default App;

