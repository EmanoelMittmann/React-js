import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
     {/*form*/}
     <MyForm user={{ name: "Josias", email: "Josias@gmail.com", bio: "Sou Advogado", role: "admin"}}/>
    </div>
  );
}

export default App;
