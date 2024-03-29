import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import App from './App'
import Hero from './components/pages/Hero'
import Skills from './components/pages/Skills'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path='#about' element={<Hero/>}/>
    <Route path='#skills' element={<Skills/>}/>
  </Routes>


  </BrowserRouter>

)
