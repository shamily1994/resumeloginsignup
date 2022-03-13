import './App.css';
import Login from "./components/form/Login"
import Signup from './components/form/Signup';
import About  from './components/form/About';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {

  return (
  
    <>

      {/* <Router>
              <nav>
                <Link to="/" style={{color:"white"}}>Signup</Link>
                <Link to="/Login"  style={{color:"white"}}>Login</Link>
              </nav>
          
            <Routes>
                <Route  path="/login" element={<Login/>}/>
                <Route  path = "/" element={<Signup/>}/>
                <Route  path ="/about" element={<About/>}/>
                <Route path ="*" element={<Error/>}/>
           </Routes>
      </Router> */}
      

          <Router>
            <Routes>
                <Route path="login" element={<Login/>}/>
             
                <Route path="signup" element={<Signup/>}/>
            
                <Route path="about" element={<About/>}/>
        
            </Routes>
          </Router>

     </>
    
  );
}

export default App;
