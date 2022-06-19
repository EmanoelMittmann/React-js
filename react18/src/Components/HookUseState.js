import React from 'react'
import { useState } from 'react'
const HookUseState = () => {
  //1 - useState

  let userName = "João";
  const [name, setName] = useState("Pedro")

  const changeNames = () => {

    userName = "João Souza";

    setName("Matheus Battisti")

    console.log(userName)
  }
  console.log(name)
  // 2 - useState e input
  const[age,setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio a uma api
    console.log(age);
  }

    return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>UseState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes</button>
        <hr />
        {/* 2 - input */}
        <p>Digite a sua idade</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        <p>Voce tem : {age} anos!</p>
    </div>
  )
}

export default HookUseState