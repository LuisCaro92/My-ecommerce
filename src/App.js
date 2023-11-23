import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/register/Login';


function App() {
  return (
    
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path = "/Home" element ={<Home/>}/>
      <Route path = "/Login" element ={<Login/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
