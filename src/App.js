import './SASS/style.sass'

import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Home from './Pages/HomePage/Home'
import Catalog from './Pages/CatalogPage/Catalog';
import Game from './Pages/GamePage';
import NotFound from './Pages/NotFound';

import {
    Routes,
    Route,
  } from "react-router-dom";



function App() {
  return (
    <div className="App">
    	<Header />
      <main className="page-container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/catalog/game/:id' element={<Game />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
		<Footer />
    </div>
  );
}

export default App;
