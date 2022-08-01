import {Route,Routes,BrowserRouter} from 'react-router-dom'
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Login from './Components/Admin/Login/Login';
import BuyProduct from './Components/BuyProduct/BuyProduct';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Iphone from './Components/Iphone/Iphone';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Routes>
      <Route path='/signin' element={<Signin/>} />
    </Routes>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    <Routes>
      <Route path='/iphone' element={<Iphone/>}/>
    </Routes>
      <Routes>
        <Route path='buy-product' element={<BuyProduct />} />
      </Routes>
    <Routes>
      <Route path='/admin' element={<Login/>}  />
    </Routes>
    <Routes>
        <Route path='/admin/dashboard' element={<Dashboard/>} />
    </Routes>
      <Routes>
        <Route path='/admin/add-product'  element={<AddProduct/>} />
      </Routes>
      
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
