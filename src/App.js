import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './Pages/Signup';
import { Route, Routes } from 'react-router-dom';
// import Login from './Pages/Login';
// import Pricing from './Screen/Pricing';
// import Profile from './Screen/Profile';
// import MainScreen from './Screen/MainScreen';
import Home from './Pages/Home';
// import ResNav from './Pages/ResNav';
import ResponsiveAppBar from './Pages/MuiNav';
import AddUser from './Screen/AddUser';
import Product from './Screen/Product';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
         {/* <Route path='/signup' element={<Signup/>}></Route> */}
        {/* <Route path='/login' element={<Login/>}></Route>  */}
        <Route path='/home' element={<Home/>}></Route>
        {/* // <Route path='/main' element={<MainScreen/>}></Route> */}
        <Route path='/Product' element={<Product/>}/>
        <Route path='/' element={<AddUser/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
