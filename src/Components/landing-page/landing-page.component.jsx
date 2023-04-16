import './landing-page.styles.scss'
import Button from '../Button/button.component';
import { fadeIn } from '../../Animation/fade-in.animate';
import { useEffect, useState } from 'react';
const LandingPage = () => {
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

    useEffect(() => {
        const pageTitle = document.querySelector('.landing-page-title');
        const px = windowHeight < windowWidth ? (40 * window.innerHeight/ 100) : 20
        fadeIn(pageTitle, 'left', px, 2000)
    }, [windowWidth, windowHeight])

    return (
        <>
            <div className="landing-page">
                <div className='landing-page-title'>
                    <h1 >Yutong Zhu</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </>
    )
}

export default LandingPage;