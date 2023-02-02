// import './App.css';
import Home from './pages/Home';

import NotFound from './pages/Not_found';
import Header from './Components/Header';
import Fotter from './Components/Footer';
import MobileNav from './Components/MobileNav';
import BookOnline from './pages/book_online';
import Schedule from './pages/schedule';
import Image from 'next/image';
import MainSection from './Components/MainSection';


function App() {
  return (
    <div>
     <Home/>
     <Fotter/>
    </div>
  );
}

export default App;
