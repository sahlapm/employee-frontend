
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import Home from './components/Home';
import { Link,Routes,Route ,BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <div class="collapse navbar-collapse Mainheader Mainheading" id="navbarTogglerDemo01">
             
              <h3 class="text-white  heading">Employee App </h3>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              </ul>
    
             
    
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item active nav-item">
                  <Link className='nav-link text-white navlnk' to='/'>Home</Link>
                </li>
    
                <li class="nav-item active nav-item">
                  <Link className='nav-link text-white navlnk' to='/employee'>Employee</Link>
                </li>
    
               
    
              
    
              </ul>
            </div>
          </nav>
          
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/employee" element={<EmployeeForm/>} />
     
     </Routes>
     
 </Router>
     

     </div>
  );
}

export default App;
