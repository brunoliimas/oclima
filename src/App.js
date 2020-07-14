import React, {Fragment} from 'react';
import axios from 'axios';

function App() {
  return (
    <Fragment>
      <h3>Clima nas suas coordenadas (Exemplo)        
      </h3>
      <hr/>
      <ul>
        <li>Temperatura Atual: xº</li>
        <li>Temperatura máxima: xº</li>
        <li>Temperatura minima: xº</li>
        <li>Pressão: x hpa</li>
        <li>Umidade: x%</li>
      </ul>
    </Fragment>
  );
}

export default App;
