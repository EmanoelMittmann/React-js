import {useState,useEffect,useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    const premiumNumbers = useMemo(() => {
       return ["0","100","200"];
    },[]);

    useEffect(() => {
        console.log("premium number foi alterado!")
    })

    return (
    <div>
        <h2>Usememo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""} 
        <hr />
    </div>
  )
}

export default HookUseMemo