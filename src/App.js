import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import { BrowserRouter, Link , Route,Routes } from 'react-router-dom';
import Newbook from './Newbook';
import Oldbook from './Oldbook';
import Login from './Login';
import Dashboard from './Dashboard'
import Form1 from './Form1';
import Fruit from './Fruit';
import Array from './Array';
import ResetArray from './ResetArray';
function App() {
  return(
    <>
    <h1>Hi hello, Welcome</h1>
    <BrowserRouter>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/aboutus">ABOUT US</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
      <li><Link to="/user/nam">User</Link></li>
      <li><Link to="/book/newbook">Newbook</Link></li>
      <li><Link to="/book/oldbook">Oldbook</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/form">Form</Link></li>
      <li><Link to="/fruits">Fruits</Link></li>
      <li><Link to="/array">Arrays</Link></li>
      <li><Link to ="/resetArray">Reset Array</Link></li>
    </ul>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/user/:nam' element={<User/>}></Route>
        <Route path='/book'>
        <Route path='newbook' element={<Newbook/>}></Route>
        <Route path='oldbook' element={<Oldbook/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/form' element={<Form1/>}></Route>
        <Route path='*' element={<b>Nothings here!!</b>}></Route>
        <Route path='/fruits' element={<Fruit/>}></Route>
        <Route path='/arrays' element={<Array/>}></Route>
        <Route path='/resetArray' element={<ResetArray/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
