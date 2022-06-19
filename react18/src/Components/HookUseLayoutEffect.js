import {useLayoutEffect, useState, useEffect} from 'react'

const HookUseLayoutEffect = () => {
    const[name, setName] = useState("algum nome")

    useEffect(() => {
        console.log("2");
        setName("Mudou de Novo")
    },[])

    useLayoutEffect(() => {
        console.log("1");
        setName("outro nome")
    },[])
    console.log(name)

  return (
    <div>
        <h1>useLayoutEffect</h1>
        <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect