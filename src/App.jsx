
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/Product';
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import View from "./pages/View";
import Pnf from "./pages/Pnf";
import Footer from "./components/Footer";







function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Product/>}/>
       <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
         <Route path='/product/:id' element={<View />} />
          <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
