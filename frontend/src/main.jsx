import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authprovider from './components/context/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Authprovider>
 <div className='dark:bg-slate-700  '>
 <Routes>
 <Route path='/*' element={<App />} />
 </Routes>
 </div>
 </Authprovider>

 </BrowserRouter>
    
 
)
