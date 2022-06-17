import './App.css';
// Pages
import Home from './Pages/Home';
import About from './Pages/About';

// Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Nav from './components/NavBar';
import Final from './Pages/Final';


function App() {
  return (
    <div className="App">
      <h1> Content API</h1>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/final" element={<Final/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
