import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";

import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import { Footer} from "./components/index";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";


function App() {


  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header/>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Sign-in" element={<SignIn />} />
            <Route path="/Sing-up" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
