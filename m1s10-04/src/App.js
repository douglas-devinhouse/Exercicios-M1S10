import React, { useReducer, useState } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'somar':
      return { result: state.result + action.payload };
    case 'subtrair':
      return { result: state.result - action.payload };      
    case 'multiplicar':      
      return { result: state.result * action.payload };      
    case 'dividir':
      if (action.payload === 0) {        
        throw new Error('O divisor não pode ser zero');
      } else {        
        return { result: state.result + action.payload };
      }
    default: throw new Error('Opção inválida');
  }
}

const initialValue = {result: 0};  

function App() {
  
  const [number, setNumber] = useState(initialValue);
  const [opcao, setOpcao] = useState('somar');  
  const [state, dispatch] = useReducer(reducer,initialValue);

  return (    
    <div className="App">
      <h1>Calculadora usando useReducer</h1>
      
      
      <input type="number" value={number} onChange={(e) => {setNumber(parseInt(e.target.value))}}/><br/>


      <select onChange={(e) => {setOpcao(e.target.value)}}>
        <option value={'somar'}>Somar</option>
        <option value={'subtrair'}>Subtrair</option>
        <option value={'multiplicar'}>Multiplicar</option>
        <option value={'dividir'}>Dividir</option>
      </select>
      <button onClick={        
        () => dispatch({type: opcao,payload: number})
      }>Executar</button>
      
      <br/>
      <p>Resultado: { state.result } </p>
    </div>    
  );
}

export default App;
