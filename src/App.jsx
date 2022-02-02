import { useState} from 'react'
import { FiSearch } from "react-icons/fi";
import './style.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState ('')

  async function handleSearch () {
    // https://viacep.com.br/ws/01001000/json/

    if (input === ''){
      alert ("Preencha com um CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      console.log(response.data)
    }
    catch {
      alert("ops, erro ao buscar")
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP aqui"
        value={input}
        onChange={(e) => setInput(e.target.value) }
         />

         <button className="buttonSearch" onClick={handleSearch}>
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

