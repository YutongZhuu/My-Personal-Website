import './landing-page.styles.scss'
import Button from '../Button/button.component';
import { fadeIn } from '../../Animation/fade-in.animate';
import { useEffect, useState } from 'react';
import {ReactComponent as EmailSvg} from '../../OtherFile/email.icon.svg'
const LandingPage = ({orientation}) => {


    useEffect(() => {
        const pageTitle = document.querySelector('.landing-page-title');
        const px = !orientation ? (40 * window.innerHeight/ 100) : 20
        fadeIn(pageTitle, 'left', px, 2000)
    }, [orientation])

    return (
        <>
            <div className="landing-page">
                <div className='landing-page-title'>
                    <p>Hello</p>
                    <h1 >I am <span>Yutong</span> Zhu</h1>
                    <p>Welcome to my <span>personal website</span></p>
                    <br/>
                    <Button url="mailto:y25zhu@uwaterloo.ca">Email Me
                    <EmailSvg/>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default LandingPage;