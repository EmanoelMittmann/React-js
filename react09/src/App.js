//components
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent"
import Events from "./components/Events";
//Style / css
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <SecondComponent/>
      <Events/>
    </div>
  );
}

export default App;
