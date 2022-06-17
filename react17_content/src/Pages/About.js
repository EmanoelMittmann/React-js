// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {

  const {color} = useTitleColorContext();

    // const {counter, setCounter} = useContext(CounterContext)
    const {counter} = useCounterContext();


  return (
    <div>
        <h1 style={{color:color}}>About</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default About