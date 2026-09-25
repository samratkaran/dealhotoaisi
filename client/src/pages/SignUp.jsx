import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import OAuth from '@/components/OAuth';

const showSignupError = (message) => {
  const msg = (message || '').toLowerCase()
  let text = 'User already exists try with different username or email'
  if (msg.includes('username')) text = 'Username already exists try with different username'
  else if (msg.includes('email')) text = 'Email already exists try with different email'

  toast.error(text, { id: 'signup-error' })
}

// Edit this message to change the toast shown after a successful signup
const SIGNUP_SUCCESS_MESSAGE = 'You are now signed in'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const submittingRef = useRef(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
       [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current) return
    submittingRef.current = true
    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup', 
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
  
        })
        const data = await res.json()
        if(data.success === false){
          showSignupError(data.message)
          return
        }
        toast.success(SIGNUP_SUCCESS_MESSAGE, { id: 'signup-success' })
        navigate('/signin')
    } catch (error) {
      toast.error(error.message || 'Something went wrong', { id: 'signup-error' })
    } finally {
      submittingRef.current = false
      setLoading(false)
    }
  
  };
console.log(formData)
  return (
   
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="h-[90vh] flex bg-white">
              {/* Left Side - Professional Image Panel */}
              <div 
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
          style={{ animation: 'slideInLeft 0.8s ease-out' }}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-between p-8 text-white w-full h-full">
            
            {/* Top Highlight Card: 5 Free Listings */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 max-w-md" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 p-2.5 rounded-lg shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">5 Free Top Property Listings</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Sign in to unlock premium dashboard features and list your top properties completely free of charge.
                  </p>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
              <h1 className="text-4xl font-bold mb-3 leading-tight">
                Welcome back
              </h1>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Track your saved properties, manage your portfolio, and continue your real estate journey with our trusted network.
              </p>
            </div>

            {/* 6 Compact Feature Blocks */}
            <div className="grid grid-cols-3 gap-3" style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-0.5">5</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Free Listings</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-0.5">Top</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Properties</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-0.5">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Verified</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-0.5">24/7</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Support</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-0.5">Zero</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Hidden Fees</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-0.5">Fast</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Access</div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Form Panel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-slate-50">
          <div 
            className="w-full max-w-md"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="text-xl font-semibold text-slate-900">EstatePro</span>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 pt-5">Create your account</h2>
              <p className="text-slate-600">Start your journey to finding the perfect property</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-slate-700 ">
                  Username
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="username"
                    placeholder="Enter your username" 
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Number */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Mobile Number
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="number"
                    placeholder="Enter your Number" 
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

               {/* Email */}
               <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    placeholder="Create a password" 
                    className="w-full px-4 py-3 pr-12 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 w-4 h-4 border-slate-300 rounded text-slate-900 focus:ring-slate-900"
                  required
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to the <a href="#" className="text-slate-900 font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-slate-900 font-medium hover:underline">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button 
              disabled={loading}

                type="submit" 
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer"
              >
               {loading ? 'Loading..' :' Sign Up'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="px-4 text-sm text-slate-500">or continue with</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Google Button */}
           <OAuth/>

            {/* Footer Link */}
            <p className="text-center text-slate-600 text-sm mt-3">
              Already have an account?
              <a href="/signin" className="text-slate-900 font-medium ml-1 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;