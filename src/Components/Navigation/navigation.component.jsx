import './navigation.styles.scss';
import { ReactComponent as HomeIcon } from '../../Icons/home.icon.svg';
import { ReactComponent as AboutMeIcon } from '../../Icons/about-me.icon.svg';
import { ReactComponent as ContactMeIcon } from '../../Icons/contact-me.icon.svg';
import { ReactComponent as ProjectsIcon } from '../../Icons/projects.icon.svg';
const Navigation=()=>{
    const onHoverHandler=(event)=>{
        if(event.target.tagName=='LI'){
            for(let i = 0; i<event.target.parentNode.childNodes.length; i++){
                event.target.parentNode.childNodes[i].className=""
            }
            event.target.className='target-icon';
        }
    }

const onMouseLeaveHandler=(event)=>{
    for(let i = 0; i<event.target.childNodes.length; i++){
        event.target.childNodes[i].className="";
    }
    event.target.childNodes[0].className='target-icon';
}

    return(
        <div className="navigation">
            <ul onMouseOver={onHoverHandler} onMouseLeave={onMouseLeaveHandler}>
                <li className='target-icon'>
                    <HomeIcon/>
                </li>
                <li>
                    <AboutMeIcon/>
                </li>
                <li>
                    <ProjectsIcon/>
                </li>
                <li>
                    <ContactMeIcon/>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;