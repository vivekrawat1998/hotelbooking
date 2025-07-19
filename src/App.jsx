
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hompage from './pages/Hompage'
import Layout from './ui/Layout'
import 'react-datepicker/dist/react-datepicker.css';
import AboutusMain from './pages/Aboutu'
import Roomdetails from './components/Roomdetails'
import LoginPage from './pages/Loginpage'
import Checkhout from './components/Checkhout'
import PaymentPage from './pages/PaymentPage'
import Rooms from './pages/Rooms'
import SignupPage from './pages/SignupPage'
import { ToastContainer } from 'react-toastify'
import Contact from './pages/ContactPage'

function App() {
  return (
    <>
      <div className=' '>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
            <Route path="/about" element={<AboutusMain />} />
            <Route path="/room/:roomId/" element={<Roomdetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room/:roomId/:categoryId" element={<Checkhout />} />
            <Route path="/payment/:bookingId" element={<PaymentPage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
