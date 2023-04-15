import LandingPage from './Components/landing-page/landing-page.component';
import Navigation from './Components/Navigation/navigation.component';
import AboutMe from './Components/About-me/about-me.component';
import LinkLists from './Components/Link-list/link-list';
import Projects from './Components/Projects/projects.component';
import ContactMe from './Components/Contact-me/contact-me';
// import './App.css';
function App() {
  return (
    <>
    <Navigation/>
    <LandingPage/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    </>
  );
}

export default App;
