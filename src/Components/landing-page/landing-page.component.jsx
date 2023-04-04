import './landing-page.styles.scss'
import Button from '../Button/button.component';
import { fadeIn } from '../../Animation/fade-in.animate';
import { useEffect, useState } from 'react';
const LandingPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const pageTitle = document.querySelector('.landing-page-title')
        const px = 20 * window.innerWidth / 100
        fadeIn(pageTitle, 'left', px, 500)
    }, [windowWidth])

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return (
        <>
            <div className="landing-page">
                <div className='landing-page-title'>
                    <h1 >Yutong Zhu</h1>
                    <p>Frontend Developer</p>
                    <Button>Contact Me</Button>
                </div>
            </div>
        </>
    )
}

export default LandingPage;