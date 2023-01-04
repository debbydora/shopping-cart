import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartItems from './pages/CartItems';

function App() {
  return (
    <BrowserRouter>
   <Header />
   <div>
    <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartItems/>} />
    </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App;
