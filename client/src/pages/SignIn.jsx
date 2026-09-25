import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart , signInSuccess , signInFailure } from '../redux/user/userSlice';
import OAuth from '@/components/OAuth';


const showSigninError = (message) => {
  const msg = (message || '').toLowerCase();
  let text = 'Wrong credentials. Please check your email and password.';
  
  if (msg.includes('not found') || msg.includes('no user')) {
    text = 'User not found. Please check your email';
  } else if (msg.includes('password') || msg.includes('incorrect')) {
    text = 'Invalid password. Please try again.';
  } else if (msg.includes('credential')) {
    text = 'Wrong credentials. Please check your email and password.';
  }

  toast.error(text, { id: 'signin-error' });
};

const SIGNIN_SUCCESS_MESSAGE = 'Welcome back!';

const SignIn = () => {
  const [formData, setFormData] = useState({
    loginBy:'',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const {loading , error} = useSelector((state)=>state.user)
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch()
  
 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        showSigninError(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      toast.success(SIGNIN_SUCCESS_MESSAGE, { id: 'signin-success' });
      navigate('/'); // Adjust route as needed
      
    } catch (error) {
      dispatch(signInFailure(error.message))
      toast.error(error.message || 'Something went wrong', { id: 'signin-error' });
    } 
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
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
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10 bg-slate-50">
          <div 
            className="w-full max-w-sm"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Sign in to your account</h2>
              <p className="text-slate-600 text-sm">Enter your details to access your dashboard</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
  <label className="block text-sm font-medium text-slate-700 mb-1.5">
    Email or phone number
  </label>

  <input
    type="text"
    name="loginBy"
    placeholder="Enter email or phone number"
    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none transition-all text-sm"
    value={formData.loginBy}
    onChange={handleChange}
    required
  />
</div>
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    placeholder="Enter your password" 
                    className="w-full px-4 py-2.5 pr-10 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none transition-all text-sm"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-slate-300 rounded text-slate-900 focus:ring-slate-900"
                  />
                  <span className="text-sm text-slate-600">Remember me</span>
                </label>
                <a href="/forgot-password" className="text-sm font-medium text-slate-900 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-5">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="px-3 text-xs text-slate-500 uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Google Button */}
        <OAuth/>

            {/* Footer Link */}
            <p className="text-center text-slate-600 text-sm mt-6">
              Don't have an account?
              <a href="/signup" className="text-slate-900 font-semibold ml-1 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;