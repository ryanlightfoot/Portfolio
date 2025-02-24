import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './ProjectDetail'; // Import the new component

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <header>
          <h1>Ryan Lightfoot</h1>
          <p className="title">Full Stack Developer</p>
        </header>

        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/" element={
            <>
              <section className="about">
                <h2>About Me</h2>
                <p>
                I am a dynamic IT professional with a strong passion for acquiring and mastering new skills.
                As a former professional surfer, I thrive on embracing challenges, whether they are physical or intellectual.
                In my spare time, I dedicate myself to enhancing my expertise by working on coding projects in many different languages.
                </p>
              </section>

              <section className="projects">
                <h2>Projects</h2>
                <div className="project-grid">
                  <div className="project-card">
                    <h3>Portfolio</h3>
                    <p>
                      A comprehensive portfolio showcasing my skills and projects as a Full Stack Developer. 
                      This project highlights my expertise in React and TypeScript, featuring a responsive 
                      design and interactive elements to provide a seamless user experience.
                    </p>
                    <div className="tech-stack">
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>Node.js</span>
                    </div>
                    <div className="additional-details">
                      <p>Additional details about the Portfolio project...</p>
                    </div>
                  </div>
                  <div className="project-card">
                    <h3>Babelas</h3>
                    <p>
                      A Kings Cup inspired drinking game developed for Android devices. 
                      This interactive party game features custom rules, dynamic card animations, 
                      and a modern user interface, making it the perfect companion for social gatherings.
                    </p>
                    <div className="tech-stack">
                      <span>Flutter</span>
                    </div>
                    <div className="additional-details">
                      <p>Additional details about the Babelas project...</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="contact">
                <h2>Contact</h2>
                <div className="contact-links-vertical">
                  <button onClick={() => window.open('https://github.com/ryanlightfoot', '_blank')}>GitHub</button>
                  <button onClick={() => window.open('https://www.linkedin.com/in/ryan-lightfoot-profile/', '_blank')}>LinkedIn</button>
                  <p>Email: ryanlightfoot509@gmail.com</p>
                </div>
              </section>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
