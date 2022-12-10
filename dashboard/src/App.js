import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { Toaster } from 'react-hot-toast';
import Register from './Components/Register';
import AddComponent from './Components/AddComponent';


function App() {
  return (
    <div>
    <Toaster/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<Login />} path="Login"/>
    <Route element={<Register />} path="register"/>
    <Route element={<AddComponent />} path="addcomponent"/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
