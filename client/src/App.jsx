import { Navbar, Welcome, Footer, Services, Transactions } from './elements';
import './App.css'
import { useEffect, useState } from 'react';


const App = () => {
  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
  );
}
    
export default App;
