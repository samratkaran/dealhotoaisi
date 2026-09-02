import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";

function App() {


  return (
    <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Profile" element={<Profile/>}/>
  <Route path="/Sign-in" element={<SignIn/>}/>
  <Route path="/Sing-up" element={<Signup/>}/>
 </Routes>
    </BrowserRouter>
  )
}

export default App
