import React from 'react'
import Header from './components/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Game from './components/Game'
import Footer from './components/Footer'
import Play from './components/Play'
const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={Play} />
            <Route path='/game' element={Game} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App