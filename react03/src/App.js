import {useState} from 'react' 
import "./app.css";
export default function App(){
  const[peso , setPeso] = useState('');
  const[altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso/(alt*alt);

    if(imc < 18.6){
      setMensagem("Voce esta abaixo do peso, seu IMC: "+ imc.toFixed(2))
    }else if(imc >= 18.6  && imc < 24.9){
      setMensagem("Peso Ideal! seu IMC: " + imc.toFixed(2))
    }else if(imc >=24.9 && imc < 34.9){
      setMensagem("Voce está levemente acima do peso!, Seu IMC: " + imc.toFixed(2))
    }else if(imc > 34.9){
      setMensagem("Cuidado Obesidade! seu Imc: "+ imc.toFixed(2) )
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span> Vamos calcular seu imc</span>
    
      <div className="area-input">
        <input
         type="text"
         placeholder="peso em (kg) Ex: 90kg"
         value={peso}
         onChange={(e) => setPeso(e.target.value)}
         />

        <input
         type="text"
         placeholder="Altura em (Cm) Ex: 170"
         value = {altura}
         onChange={(a) =>setAltura(a.target.value)}
         />

        <button onClick={calcularIMC}>
          Calcular
        </button>

      </div>

      <h2>{mensagem}</h2>

    </div>
  )
}