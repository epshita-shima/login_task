import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import DasboradMain from './Pages/Dashboard/DasboradMain';
import Action from './Pages/Dashboard/Action';
import HeaderTest from './component/HeaderTest';



function App() {
  return (
    <div className='bg-slate-100 h-screen  flex flex-col items-center justify-center'>
    <HeaderTest></HeaderTest>
     <Routes>
     <Route path='/' element={<Login></Login>}></Route>
      <Route path='/action' element={<Action></Action>}></Route>
      <Route path='/dasboard' element={<DasboradMain></DasboradMain>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;
