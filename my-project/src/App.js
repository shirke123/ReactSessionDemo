import Home from './reactrouter/Home'
import Services from './reactrouter/Services';
import Contact from './reactrouter/Contact';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <div>
    <ul>
       <li><a href="/home">Home</a></li>
       <li><a href="/services">Services</a></li>
       <li><a href="/contact">Contact</a></li>
    </ul>
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
      <Route path='/services/:message' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;