import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Detail from './Components/Detail/Detail'
import Watchlist from './Components/Watchlist/Watchlist'
import Original from './Components/Originals/Original'
import Movies from './Components/Movies/Movies'
import Series from './Components/Series/Series'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/watchlist' element={<Watchlist/>} />
          <Route path='/original' element={<Original/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
