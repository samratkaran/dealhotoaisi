import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import About from "./pages/About";

import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import { Footer, Header} from "./components/index";

import Profile from "./pages/Profile";
import Home from "./pages/Home";


function App() {


  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          error: {
            style: {
              background: '#0f172a',
              color: '#fff',
            },
          },
        }}
      />
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header/>
        <main className="flex-1 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
