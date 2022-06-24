import {Link} from 'react-router-dom';
import FirstComponent from './components/FirstComponent';

// 5 - destruturando props
import SecondComponent from './components/SecondComponent';
import Destruturing, {Category} from './components/destruturing';

// 6 - useState
import State from './components/State';
import { createContext } from 'react';
import Context from './components/Context';

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo"

 // 9 - context
 interface IAppContext {
  language : string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

const contextValue: IAppContext = {
  language: "Javascript",
  framework: "Express",
  projects: 5,
}

  // 1 - variavel
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = false;

  // 2 - funções
  const userGreeting = (name: string):string => {
    return `Olá, ${name}`
  }
  const myText:textOrNull = "tem algum texto aqui"
  let mySecondText: textOrNull = null;

  const testandoFixed:fixed = "Aquilo"

  mySecondText = "opa";

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p> Está trabalhando!</p>}
    
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/> 

      <SecondComponent name="TypeScript"/>

      <Destruturing title="emanoel" content=" leffa mittmann de oliveira" commentQty={12} tags={["love","live","like"]} category={Category.TS}/>

      <Destruturing title="lorenzo" content=" leffa mittmann de oliveira" commentQty={12} tags={["life","live","like"]} category={Category.TS}/>
      <State/>
      {myText && <p>tem Texto na variável</p>}
      {mySecondText && <p>tem texto na variável</p>}
      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
