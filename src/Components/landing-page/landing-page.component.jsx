import './landing-page.styles.scss'
import Button from '../Button/button.component';
const LandingPage = () => {
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