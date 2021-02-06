
import { Routes, Route } from 'react-router';
import {
  Home,
  AboutUs,
  Events,
  ContactUs,
  CompanyHistory,
  OurMission,
  Oops
} from './pages'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
   
      <Route path='/aboutus' element={<AboutUs/>}>
          <Route path='/history' element={<CompanyHistory/>}></Route>
          <Route path='/mission' element={<OurMission/>}></Route>
      </Route>
   
      <Route path='/events' element={<Events/>}></Route>
   
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='*' element={<Oops/>}></Route>
    </Routes>
  );
}

export default App;
 