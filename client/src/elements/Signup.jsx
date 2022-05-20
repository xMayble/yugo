import React, { useState } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';





const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    
    
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
    
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/signin' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className = 'loginContainer'>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium text-white'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email'
          />
        </div>
        <div className='flex flex-col py-2 '>
          <label className='py-2 font-medium text-white' >Password(Must be at least 6 characters)</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3'
            type='password'
          />
        </div>
        <button className='border border-purple-500 bg-purple-600 hover:bg-violet-500 w-full p-4 my-2 text-white'>
          Sign Up
        </button>
      </form>
    </div>
    </nav>
  );
};

export default Signup