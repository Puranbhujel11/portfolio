import React from 'react';
import Navbar from './components/utility/Navbar';
import Footer from './components/utility/Footer';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/Home" element ={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
          
       <Footer />
      </div>
    </Router>
    
    </>
     
     
    
  );
}

export default App;
