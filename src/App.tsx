import './SASS/style.sass'
import Home from './Pages/HomePage/Home'
import Catalog from './Pages/CatalogPage/Catalog';
import Game from './Pages/GamePage';
import NotFound from './Pages/NotFound';
import Case from './Pages/CasePage'
import Cart from './Pages/CartPage'
import MainLayout from './layouts/MainLayout';
import FullScreenLayout from './layouts/FullScreenLayout';

import {
    Routes,
    Route,
  } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/catalog/game/:id' element={<Game />}/>
        <Route path='/case/:id' element={<Case />}/>
      </Route>
      <Route path='*' element={<FullScreenLayout />}>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
