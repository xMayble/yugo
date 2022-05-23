import {React ,  useEffect, useState} from 'react';
import ReactDom from 'react-dom'
import { UserAuth, upload } from '../context/AuthContext';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
    padding: '150px',
    zIndex: 1000
  }
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
  
  
  

  export default function Modal({ open, children, onClose }) {
    if (!open) return null
    const { user} = UserAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg');
    
    
    
    
    useEffect(() => {
        if (user?.photoURL) {
          setPhotoURL(user.photoURL);
        }
      }, [user])
    
    function handleChange(e) {
        if (e.target.files[0]) {
          setPhoto(e.target.files[0])
        }
      }

    function handleClick() {
        upload(photo, user, setLoading);
      }
    
    
    
      return (
        
       <>
       
      <div style={OVERLAY_STYLES} />
      
      <div style={MODAL_STYLES}>
          <section>
      <div>
      <img src={photoURL}  />
       <br></br>
       <nav>
       <input type="file" onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button  onClick={onClose} >Done</button>
        </nav>
        </div>  
        </section>
      </div>
      
    </>
        


    )


}
    