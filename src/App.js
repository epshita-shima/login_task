import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className='bg-slate-100 h-screen flex flex-col items-center justify-center'>
     <Login></Login>
   
    </div>
  );
}

export default App;
