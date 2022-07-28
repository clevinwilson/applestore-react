import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
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
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
