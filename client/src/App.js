import LandingPage from './Sections/Landing-page/landing-page.component';
import Navigation from './Components/Navigation/navigation.component';
import AboutMe from './Sections/About-me/about-me.component';
import Projects from './Sections/Projects/projects.component';
import ContactMe from './Sections/Contact-me/contact-me';
import { useEffect, useState } from 'react'
import { useContent } from './Hooks/useContent';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [windowHeight, setWindowHeight] = useState(window.outerHeight);
  const content=useContent();
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
      <Navigation orientation={windowHeight > windowWidth} />
      <LandingPage orientation={windowHeight > windowWidth} />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
