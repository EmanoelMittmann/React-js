// react pages
import './App.css';
import Home from './Pages/Home';
import Main from './Pages/Main';
import Info from './Pages/info';
import Search from './Pages/Search';

//Components
import Nav from './Component/Navbar';
import Product from './Component/Product';
import NotFound from './Component/NotFound';
import SearchForm from './Component/SearchForm';

//Hooks
import { useFetch } from './hooks/useFetch';
// react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>react routes</h1>
      <BrowserRouter>
      {/* 2 - Links com react router */}
        <Nav/>
        {/* 9 - search  */}
        <SearchForm/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Main" element={<Main/>}/>     
        {/* 6 - nested route*/}
        <Route path="/products/:id/info" element={<Info />}/> 
        {/* 4 - rota dinamica */}
        <Route path="/products/:id" element={<Product />}/>
        {/* 9 - Search */}
        <Route path="/search" element={<Search/>}/>
        {/* 10 - Redirent */}
        <Route path='/company' element={<Navigate to="/search"/>}/>
        {/* 7 - no match route */}
        <Route path="*" element={<NotFound/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
