import {React ,  useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth, upload } from '../context/AuthContext';
import Modal from './modal';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false)
  const [photoURL, setPhotoURL] = useState('https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg');
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user])

  return (
    <section className='hero'>
      <nav>
      <button ><Link to='/'>Home</Link></button>
      <h1 className='text-2xl font-bold py-4 text-white'>Account</h1>
      
      <p className='text-white'>User Email: {user && user.email}</p>
      <ibutton onClick={() => setIsOpen(true)} alt = 'ibutton'className='ibutton'><img src={photoURL} alt='Avatar' className='avatar' /></ibutton>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>

      <button onClick={handleLogout} >
        Logout
      </button>
      </nav>
    </section>
  );
};

export default Account
