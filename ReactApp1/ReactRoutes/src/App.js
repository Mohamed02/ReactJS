
import { Routes, Route } from 'react-router';
import {
  Home,
  AboutUs,
  Events,
  ContactUs,
  Oops
} from './pages'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
   
      <Route path='/aboutus' element={<AboutUs/>}></Route>
   
      <Route path='/events' element={<Events/>}></Route>
   
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='*' element={<Oops/>}></Route>
    </Routes>
  );
}

export default App;
 