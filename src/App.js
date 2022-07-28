import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin';
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
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
