import { Navbar, Welcome, Footer, Services, Transactions, Signup, Signin, Account } from './elements';
import './App.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';



const App = () => {
  
  return (
    <Router>
      <AuthContextProvider>
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
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      </AuthContextProvider>
    </Router>
  );
}
    
export default App;
