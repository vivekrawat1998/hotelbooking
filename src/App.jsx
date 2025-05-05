
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hompage from './pages/Hompage'
import Layout from './ui/Layout'
import 'react-datepicker/dist/react-datepicker.css';
import AboutusMain from './pages/Aboutu'
function App() {

  return (
    <>
      <div className=' '>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
            <Route path="/home" element={<Hompage />} />
            {/* Add more routes here as needed */}
            {/* Example: */}
            <Route path="/about" element={<AboutusMain />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
