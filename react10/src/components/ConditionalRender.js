import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)
    const [name,setName] = useState("Jo")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        { x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>if ternário</h1>
        {name === "João"? (
            <div>
                <p>O Nome é João</p>
            </div>
        ):(
            <div>
                <p>O nome não é João</p>
            </div>
        )}
        <button onClick={() => setName("João")}>clica aqui</button>
    </div>
    
  )
}

export default ConditionalRender