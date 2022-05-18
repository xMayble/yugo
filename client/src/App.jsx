import { Navbar, Welcome, Footer, Services, Transactions } from './elements';
import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



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
    <Router>
      <Routes>
        <Route path='/' element = {(
            <div className="min-h-screen">
            <div className="gradient-bg-welcome">
              <Navbar />
              <Welcome />
            </div>
              <Services />
              <Transactions />
              <Footer />
          </div>
          )} />
        
      </Routes>
    </Router>
  );
}
    
export default App;
