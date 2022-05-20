import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section className='hero'>
      <nav>
      <h1 className='text-2xl font-bold py-4 text-white'>Account</h1>
      <p className='text-white'>User Email: {user && user.email}</p>

      <button onClick={handleLogout} >
        Logout
      </button>
      </nav>
    </section>
  );
};

export default Account