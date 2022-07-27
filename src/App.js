import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
