
import { ReactComponent as HomeIcon } from '../../OtherFile/home.icon.svg';
import { ReactComponent as AboutMeIcon } from '../../OtherFile/about-me.icon.svg';
import { ReactComponent as ContactMeIcon } from '../../OtherFile/contact-me.icon.svg';
import { ReactComponent as ProjectsIcon } from '../../OtherFile/projects.icon.svg';
const IconList = ({onMouseLeaveHandler, onHoverHandler, onClickHandler}) => {
    return (
        <div className='navigation'>
            <ul onMouseLeave={onMouseLeaveHandler} onMouseOver={onHoverHandler} onClick={onClickHandler}>
                <li className='target-icon'>
                    <HomeIcon />
                </li>
                <li>
                    <AboutMeIcon />
                </li>
                <li>
                    <ProjectsIcon />
                </li>
                <li>
                    <ContactMeIcon />
                </li>
            </ul>
        </div>
    )
}

export default IconList;