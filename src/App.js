import './App.css';
import "./componentes/button/button.css"
import ItemDetailConteiner from './componentes/itemDetailConteiner/ItemDetailConteiner';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';

import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  
  return (
   <BrowserRouter>
   <NavBar/>
     <Routes>
       <Route path='/' element={ <ItemListConteiner/> }/>
       <Route path='/item/:itemid' element={ <ItemDetailConteiner/> }/>
     </Routes>
   
   </BrowserRouter>
  );
}

export default App;
