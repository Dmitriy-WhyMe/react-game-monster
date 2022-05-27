import './SASS/style.sass'

import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Home from './Pages/HomePage/Home'

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
			</Routes>
		</main>
		<Footer />
    </div>
  );
}

export default App;
