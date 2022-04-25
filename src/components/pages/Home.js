import React from 'react'
import "../styles/home.css";

const Home = () => {
  return (
    <>
    <section className="hero">
        <div className="hero-inner">
          <h1>Puran Bhujel</h1>
          <h2>Coding Apprentice</h2>
          <a href="/contact" className="btn">
            Connect..!
          </a>
          <div className='sociallink'>
    <ul>
         <li><i class="fab fa-facebook-f"></i></li>
         <li><i class="fab fa-instagram"></i></li>
         <li><i class="fab fa-linkedin-in"></i></li>
         <li><i class="fab fa-github"></i></li>
      </ul>
      </div>

      <div className="expertise">
        <div className="skills_header">
          <h2 className='skill'>Expertise</h2>
        </div>
        <div className="skills_icons">
          <i class="devicon-html5-plain-wordmark colored"></i>

          <i className="devicon-css3-plain-wordmark colored"></i>

          <i className="devicon-javascript-plain colored"></i>

          <i className="devicon-react-original-wordmark colored"></i>

          <i className="devicon-sass-original colored"></i>

        <i className="devicon-bootstrap-plain-wordmark colored"></i>

        <i className="devicon-nodejs-plain-wordmark colored"></i>

        <i className="devicon-mysql-plain-wordmark colored"></i>

        <i className="devicon-git-plain-wordmark colored"></i>

        <i className="devicon-github-plain-wordmark colored"></i>
        </div>
        
        
        
      </div>
 </div>
        
      </section>
      
      
      </>
  )
}

export default Home
