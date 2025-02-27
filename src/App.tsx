import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './ProjectDetail'; // Import the new component
import { useState, useEffect, useRef } from 'react';

function App() {
  const [, setIsCardHovered] = useState<boolean>(false);
  const projectGridRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to catch elements already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll event listener to check scroll position
  useEffect(() => {
    const checkScrollPosition = () => {
      if (!projectGridRef.current) return;
      
      const container = projectGridRef.current;
      const isAtStart = container.scrollLeft <= 10;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      
      setShowLeftArrow(!isAtStart);
      setShowRightArrow(!isAtEnd);
    };
    
    const container = projectGridRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      // Initialize on mount
      checkScrollPosition();
      
      // Also check after window resize
      window.addEventListener('resize', checkScrollPosition);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  // Add this useEffect to update the custom scrollbar
  useEffect(() => {
    const updateScrollbar = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      document.documentElement.style.setProperty('--scroll-percentage', `${scrollPercentage}%`);
    };
    
    window.addEventListener('scroll', updateScrollbar);
    updateScrollbar(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', updateScrollbar);
  }, []);

  const scrollLeft = () => {
    if (projectGridRef.current) {
      projectGridRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (projectGridRef.current) {
      projectGridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Router>
        <div className="portfolio-container">
          <header className="header-container fade-in">
            <div className="text-container">
              <h1>Ryan Lightfoot</h1>
              <p className="title" style={{ textAlign: 'left' }}>Full Stack Developer</p>
            </div>
            <img src="./images/profile.jpg" alt="Profile" className="profile-img" onError={() => console.error("Image failed to load")} />
          </header>

          <Routes>
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/" element={
              <>
                <section className="about fade-in">
                  <h2>ABOUT ME</h2>
                  <p>
                  I am a dynamic IT professional with a strong passion for acquiring and mastering new skills.
                  As a former professional surfer, I thrive on embracing challenges, whether they are physical or intellectual.
                  In my spare time, I dedicate myself to enhancing my expertise by working on coding projects in many different languages.
                  </p>
                </section>

                <section className="projects fade-in">
                  <h2>PROJECTS</h2>
                  <div style={{ position: 'relative' }}>
                    <button 
                      className={`scroll-button scroll-left ${!showLeftArrow ? 'hidden' : ''}`} 
                      onClick={scrollLeft}
                    >
                      ←
                    </button>
                    <div className="project-grid" ref={projectGridRef}>
                      <div
                        className="project-card"
                        onMouseEnter={() => setIsCardHovered(true)}
                        onMouseLeave={() => setIsCardHovered(false)}
                      >
                        <h3>CAMPWEST</h3>
                        <p>
                          Completed private projects involving Python, PostgreSQL, Solana, and TypeScript. 
                          These projects demonstrate my ability to work with a variety of technologies and 
                          deliver robust solutions in different domains.
                        </p>
                        <p>
                          USA BASED - Employed from February 2024
                        </p>
                        <div className="tech-stack">
                          <span>PYTHON</span>
                          <span>POSTGRESQL</span>
                          <span>SOLANA</span>
                          <span>TYPESCRIPT</span>
                        </div>
                      </div>
                      <div
                        className="project-card"
                        onMouseEnter={() => setIsCardHovered(true)}
                        onMouseLeave={() => setIsCardHovered(false)}
                      >
                        <h3>PORTFOLIO</h3>
                        <p>
                          A comprehensive portfolio showcasing my skills and projects as a Front end Developer. 
                          This project highlights my expertise in React and TypeScript, featuring a responsive 
                          design and interactive elements to provide a seamless user experience.
                        </p>
                        <div className="tech-stack">
                          <span>REACT</span>
                          <span>TYPESCRIPT</span>
                          <span>NODE.JS</span>
                        </div>
                        <div className="contact-links-vertical">
                          <button onClick={() => window.open('https://github.com/ryanlightfoot/Portfolio', '_blank')}>GITHUB</button>
                        </div>
                      </div>
                      <div
                        className="project-card"
                        onMouseEnter={() => setIsCardHovered(true)}
                        onMouseLeave={() => setIsCardHovered(false)}
                      >
                        <h3>BABELAS</h3>
                        <p>
                          A Kings Cup inspired drinking game developed for Android devices. 
                          This interactive party game features custom rules, dynamic card animations, 
                          and a modern user interface, making it the perfect companion for social gatherings.
                        </p>
                        <div className="tech-stack">
                          <span>FLUTTER</span>
                        </div>
                        <div className="contact-links-vertical">
                          <button onClick={() => window.open('https://github.com/ryanlightfoot/Babelas', '_blank')}>GITHUB</button>
                        </div>
                      </div>
                      <div
                        className="project-card"
                        onMouseEnter={() => setIsCardHovered(true)}
                        onMouseLeave={() => setIsCardHovered(false)}
                      >
                        <h3>SWELLSEEKERS</h3>
                        <p>
                          A React-based web application designed for surf enthusiasts to check wave forecasts, 
                          weather conditions, and equipment recommendations. Features include 5-day forecasts with 
                          hourly data for popular surf spots, user accounts to save favorite locations, and 
                          equipment tracking for wetsuits and surfboards.
                        </p>
                        <div className="tech-stack">
                          <span>REACT</span>
                          <span>MATERIAL UI</span>
                          <span>DOTNET</span>
                        </div>
                        <div className="contact-links-vertical">
                          <button onClick={() => window.open('https://github.com/ryanlightfoot/SwellSeekersFrontEnd', '_blank')}>GITHUB (front end)</button>
                        </div>
                      </div>
                    </div>
                    <button 
                      className={`scroll-button scroll-right ${!showRightArrow ? 'hidden' : ''}`} 
                      onClick={scrollRight}
                    >
                      →
                    </button>
                  </div>
                </section>

                <section className="contact fade-in">
                  <h2>CONTACT ME</h2>
                  <div className="contact-links-vertical">
                    <button onClick={() => window.open('https://github.com/ryanlightfoot', '_blank')}>GITHUB</button><br />
                    <button onClick={() => window.open('https://www.linkedin.com/in/ryan-lightfoot-profile/', '_blank')}>LINKEDIN</button><br />
                    <button onClick={() => window.location.href = 'mailto:ryanlightfoot509@gmail.com'}>EMAIL</button>
                  </div>
                </section>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
