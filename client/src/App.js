import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';



function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
    <Route path='/auth' element={<Auth/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
