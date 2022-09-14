import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import DashboardNew from './Pages/DasboardNew';
import NewPass from './component/NewPass';

function App() {
  return (
    <div className='bg-slate-100 h-screen'>
     <Routes>
     <Route path='/' element={<Login></Login>}></Route>
     <Route path='/dashboard' element={<DashboardNew></DashboardNew>}></Route>
     <Route path='/newpass' element={<NewPass/>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;
