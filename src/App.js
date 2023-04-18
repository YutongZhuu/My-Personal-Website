import LandingPage from './Components/landing-page/landing-page.component';
import Navigation from './Components/Navigation/navigation.component';
import AboutMe from './Components/About-me/about-me.component';
import LinkLists from './Components/Link-list/link-list';
import Projects from './Components/Projects/projects.component';
import ContactMe from './Components/Contact-me/contact-me'; 
import {useEffect, useState} from 'react'
// import './App.css';
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
