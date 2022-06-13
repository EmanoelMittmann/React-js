import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const [cars] = useState([
    {id: 1, marca:"volkswagem", tipo:"suv", modelo:"t-cross", color:"metalic-blue", ano:2019},
    {id: 2, marca:"KIA", tipo:"sedã", modelo:"Optima", color:"fosc-black", ano:2020},
    {id: 3, marca:"Hyundai", tipo:"Hatch", modelo:"Hb-20", color:"metalic-gray", ano:2010}
  ])

  return (
    <div className="App">
      {cars.map((car) => (
        <MyComponent car={car}
        />
      ))}
    </div>
  );
}

export default App;
