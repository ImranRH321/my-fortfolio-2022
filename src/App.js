
import './App.css';
import OffCanvasHeader from './pages/OffCanvasHeader';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Blog from './pages/Blog';
import Banner from './pages/Banner';

function App() {
  
  return (
    <div className="App px-3">
      <OffCanvasHeader></OffCanvasHeader>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/banner' element={<Banner/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skill' element={<Skill/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
