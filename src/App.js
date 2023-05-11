
import Navigation from './Components/Navigation/navigation.component';
import AboutMe from './Components/About-me/about-me.component';
import Projects from './Components/Projects/projects.component';
import ContactMe from './Components/Contact-me/contact-me'; 
import LandingPage from './Components/Landing-page/landing-page.component'
import {useEffect, useState} from 'react';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [windowHeight, setWindowHeight] = useState(window.outerHeight);

  useEffect(() => {
      function handleResize() {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight)
      }
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <>
    <Navigation orientation={windowHeight>windowWidth}/>
    <LandingPage orientation={windowHeight>windowWidth}/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    </>
  );
}

export default App;
