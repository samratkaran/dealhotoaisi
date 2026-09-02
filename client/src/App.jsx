import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import {Header , Footer} from "./components/index";


function App() {


  return (
    <BrowserRouter>
    <Header/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Profile" element={<Profile/>}/>
  <Route path="/Sign-in" element={<SignIn/>}/>
  <Route path="/Sing-up" element={<Signup/>}/>
 </Routes>

<Footer/>
    </BrowserRouter>
  )
}

export default App
