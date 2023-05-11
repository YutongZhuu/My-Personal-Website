
import { ReactComponent as HomeIcon } from '../../OtherFile/home.icon.svg';
import { ReactComponent as AboutMeIcon } from '../../OtherFile/about-me.icon.svg';
import { ReactComponent as ContactMeIcon } from '../../OtherFile/contact-me.icon.svg';
import { ReactComponent as ProjectsIcon } from '../../OtherFile/projects.icon.svg';
import { ReactComponent as MunuIcon } from '../../OtherFile/manu.icon.svg';
import './Icon-List.styles.scss';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
const IconList = ({ onMouseLeaveHandler, onHoverHandler, onClickHandler }) => {
    const [display, setdisplay] = useState(false);
    const ul = useRef(null);

    useEffect(() => {
        if (ul.current) {
            ul.current.className = display ? "display" : "";
        }
    }, [display])

    return (
        <div className='icon-list'>
            <div>
                <MunuIcon onClick={
                    (e) => {
                        if(e.target.parentNode.tagName!="DIV")return
                        setdisplay(!display);
                        e.target.parentNode.className = (!display) ? "rotate" : "";
                    }
                }
                />
            </div>
            <ul
                ref={ul}
                onMouseLeave={onMouseLeaveHandler}
                onMouseOver={onHoverHandler}
                onClick={onClickHandler}>
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