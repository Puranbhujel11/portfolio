import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Navbar'>
        <div className='nav-logo'>PB
        
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          
          <Link to = "/Home">Home</Link>
          <Link to = "/Project">Projects</Link>
          <Link to = "/contact">contact</Link>
         
            </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'>

          </div>

        </div>




    </div>
  )
}

export default Navbar