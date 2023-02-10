import './App.css';
import "./componentes/button/button.css"
import ItemDetailConteiner from './componentes/itemDetailConteiner/ItemDetailConteiner';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from './storage/cartContext';
import CartContainer  from "./componentes/cartConteiner/CartConteiner";

import { exportDataWithBatch } from './services/firebase';
import Checkout from './componentes/Checkout/Checkout';


function App() {
  
  return (
    <>
    <CartContextProvider>
    <button onClick={exportDataWithBatch}>Export Data</button>
   <BrowserRouter>
   <NavBar/>
     <Routes>
       <Route path='/' element={ <ItemListConteiner/> }/>
       <Route path='/category/:categoryid' element={ <ItemListConteiner/> }/>
       <Route path='/item/:itemid' element={ <ItemDetailConteiner/> }/>
       <Route path='/cart' element={<CartContainer/>} />
       <Route path='/checkout' element={<Checkout />} />
       <Route path='*' element={ <h1>404: Page not found</h1>} />
     </Routes>
   
   </BrowserRouter>
   </CartContextProvider>
   </>
  );
}

export default App;
