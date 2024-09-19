import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Freebooks from "./components/Freebooks";
import Home from "./components/home/Home";
import {Navigate, Route, Routes} from 'react-router-dom'
import Course from "./components/Course";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import toast,{Toaster} from 'react-hot-toast'
import { useAuth } from "./components/context/Authprovider";
import About from "./components/About";
function App() {
const [authuser,setAuthuser]=useAuth()
console.log(authuser);
  

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/course" element={authuser?<Course/>:<Navigate to='/signup'/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
<Toaster/>
    </>
   )
}

export default App;
