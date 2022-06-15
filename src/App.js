import './SASS/style.sass'

import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Home from './Pages/HomePage/Home'
import Catalog from './Pages/CatalogPage/Catalog';
import Game from './Pages/GamePage';
import NotFound from './Pages/NotFound';
import Case from './Pages/CasePage'

import { useSelector  } from 'react-redux'

import {
    Routes,
    Route,
  } from "react-router-dom";

function App() {
  const { slugValue, gamesArray, caseTitle } = useSelector(state => state.cases)
  return (
    <div className="App">
    	<Header />
      <main className="page-container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/catalog/game/:id' element={<Game />}/>
          <Route path={slugValue} element={<Case gamesArray={gamesArray} caseTitle={caseTitle}/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
		<Footer />
    </div>
  );
}

export default App;
