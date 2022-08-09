import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Account from './Components/Account/Account';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Login from './Components/Admin/Login/Login';
import Bag from './Components/Bag/Bag';
import BuyProduct from './Components/BuyProduct/BuyProduct';
import Favorites from './Components/Favorites/Favorites';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Ipad from './Components/Ipad/Ipad';
import Iphone from './Components/Iphone/Iphone';
import Iphone12 from './Components/Iphone12/Iphone12';
import Order from './Components/Order/Order';
import Shipping from './Components/Shipping/Shipping';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Watch from './Components/Watch/Watch';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/signin' element={<Signin />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Routes>
        <Route path='/iphone' element={<Iphone />} />
      </Routes>
      <Routes>
        <Route path='buy-product/:id' element={<BuyProduct />} />
      </Routes>
      <Routes>
        <Route path='/bag' element={<Bag/>} />
      </Routes>
      <Routes>
        <Route path='/account' element={<Account/>} />
      </Routes>
      <Routes>
        <Route path='/favorite' element={<Favorites/>} />
      </Routes>
      <Routes>
        <Route path='/order' element={<Order/>} />
      </Routes>
      <Routes>
        <Route path='/iphone12' element={<Iphone12/>} />
      </Routes>
      <Routes>
        <Route path='/shipping' element={<Shipping/>} />
      </Routes>
      <Routes>
        <Route path='/watch' element={<Watch/>}/>
      </Routes>
      <Routes>
        <Route path='/ipad' element={<Ipad/>} />
      </Routes>
      

      <Routes>
        <Route path='/admin' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path='/admin/add-product' element={<AddProduct />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
