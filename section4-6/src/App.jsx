import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import StartPage from './components/StartPage'
import './App.css'
import Explanation from './components/Explanation'
import { MiniActivityHome, MiniActivityAbout } from './components/MiniActivity'
import Assignment from './components/Assignment'

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage/>} />
      <Route path="/explanation" element={<Explanation/>}/>
      <Route path="/home" element={<MiniActivityHome/>}/>
      <Route path="/about" element={<MiniActivityAbout/>}/>
      <Route path="/profile/:username" element={<Assignment/>}/>
    </Routes>
  )
}

export default App
