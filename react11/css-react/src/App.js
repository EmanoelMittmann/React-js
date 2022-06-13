import Mycomponent from './components/Mycomponent';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 12
  const [name] = useState("Emanoel");
  const redTitle = true

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <Mycomponent/>
      <p>Este paragrafo é do App.js</p>
      {/* inline css */}
      <p style={{color: "blue", margin: "auto", borderTop: "2px solid red"}}>este elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: " red"})}>css dinamico</h2>
   
      <h2 style={name === "Emanoel" ? {color: 'green', backgroundColor: '#000'} : null}>Css Dinâmico</h2>
    
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}> 
        Este título vai ter classe dinâmica
      </h2>
      {/* Css Modules */}
      <Title/>
    </div>
  );
}

export default App;
