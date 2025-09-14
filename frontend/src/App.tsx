import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from 'pages/Home'
import Course from 'pages/Course'
import Login from 'pages/Login'
import Contact from 'pages/Contact'
import TermsAndConditions from 'pages/TermsAndConditions'
import Policy from 'pages/Policy';
import Checkout from './components/Payment/Checkout';
import AppProviders from './context/Providers';
import Message from './components/Payment/Message';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProviders>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/course" element={<Course />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/terms" element={<TermsAndConditions />}></Route>
            <Route path="/policies" element={<Policy />}></Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/success' element={<Message />} />
          </Routes> 
        </AppProviders>
      </BrowserRouter>
      <Toaster
        position='bottom-right'
        toastOptions={{
          duration: 5000,
          style: {
            background: "transparent",
            boxShadow: "none"
          }
        }}
      />
    </>
  )
}

export default App
