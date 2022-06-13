import { useState } from 'react';
import './App.css';
import Pavao from "./assets/img2.jpg"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Show from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecutionFunction from './components/ExecutionFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import Desafio from './components/Desafio';

function App() {
  const [name] = useState("Eduardo")

  const cars = [
    {id: 1, brand:"Toyota", color:"Cinza",km:0, newcar:true },
    {id: 2, brand:"Aston Martin", color:"cinza-esverdeado",km:10, newcar:false },
    {id: 3, brand:"Rolls Royce", color:"branco",km:0, newcar:true }
  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }
  const[message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  const [people] = useState([
    {id:1, name:"Guilherme", job:"Autonomo", age:14},
    {id:2, name:"Pedro", job:"Vendedor", age:24},
    {id:3, name:"Fernanda", job:"Vereadora", age:44},
  ])

  return (
    <div className="App">
      <h1>Começando seção 2</h1>
      <div className='img-div'>
        <img src="/img1.jpg" alt=""/>
      </div>
      <div className='img-div'>
        <img src={Pavao} alt="" />
      <div/>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props */}
      <Show name={name}/>
      {/*Destructuring */}
      <CarDetails brand="Ford" km={20000} color="red" newcar={false}/>
      <CarDetails brand="kia" km={0} color="white" newcar={true}/>
      <CarDetails brand="nissan" km={200} color="black" newcar={false}/>
      {/* loop em array de objetos*/}
      {cars.map((cars)=>(
        <CarDetails 
        key={cars.id}
        brand={cars.brand} 
        color={cars.color} 
        km={cars.km} 
        newcar={cars.newcar}/>
      ))}
      {/* fragments */}
      <Fragments propFragment={"Terceiro titulo"}/>

      {/* children*/}
        <Container myvalue="testing">
          <p>É este o conteúdo</p> 
        </Container>
      </div>
      {/* função */}
      <ExecutionFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
        {/*desafio */}
      {people.map((people) => (
        <Desafio
          key={people.id}
          name={people.name}
          job={people.job}
          age={people.age}
        />
      ))}
    </div>
  );
}

export default App;
