import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Detail from './Components/Detail/Detail'

export default function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail' element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
