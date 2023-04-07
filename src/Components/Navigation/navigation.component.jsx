import './navigation.styles.scss';
import { ReactComponent as HomeIcon } from '../../Icons/home.icon.svg';
import { ReactComponent as AboutMeIcon } from '../../Icons/about-me.icon.svg';
import { ReactComponent as ContactMeIcon } from '../../Icons/contact-me.icon.svg';
import { ReactComponent as ProjectsIcon } from '../../Icons/projects.icon.svg';
import {  useEffect, useState } from 'react';
import { scroll } from '../../Animation/scroll.animate';
const Navigation = () => {
    const findBetweenArrayElements = (number, array) => {
        for (let i = 0; i < array.length; i++) {
            if (number > array[i] && (array[i + 1] ? number < array[i + 1] : true)) {
                return i;
            }
        }
    }

    const [headers, setHeaders] = useState(null);
    const [iconClicked, setIconClicked] = useState(false)
    useEffect(() => {
        onMouseLeaveHandler();
        const headersArray = Array.from(document.querySelectorAll('h1')).map((h, i) => {
            if (i == 0)
                return 0;
            else
                return h.offsetTop
        });
        setHeaders(headersArray)
        const scrollHandler = () => {
            if (iconClicked) return
            const icons = document.querySelectorAll('.navigation li')
            const iconNumber = findBetweenArrayElements(window.scrollY, headersArray)
            icons.forEach((i) => {
                i.className = '';
            })
            iconNumber ? icons[iconNumber].className = 'target-icon' : icons[0].className = 'target-icon'
        }
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [iconClicked])

    const onHoverHandler = (event) => {
        if (event.target.tagName == 'LI') {
            for (let i = 0; i < event.target.parentNode.childNodes.length; i++) {
                event.target.parentNode.childNodes[i].className = ""
            }
            event.target.className = 'target-icon';
        }
    }

    const onMouseLeaveHandler = (event) => {
        const scrollEvent = new Event('scroll');
        document.dispatchEvent(scrollEvent);
    }

    const onClickHandler = (event) => {
        setIconClicked(true);
        // console.log(iconClicked, 'click')
        let target = event.target;
        if (target.tagName != 'LI' && target.tagName != 'svg' && target.tagName != 'path')
            return
        while (target && target.tagName !== 'LI') {
            target = target.parentNode;
        }

        const iconNumber = Array.from(target.parentNode.childNodes).findIndex((i) => i == target)
        scroll(headers[iconNumber], 500);
        setTimeout(() => {
            setIconClicked(false);
        }, 500)
    }

    return (
        <div className="navigation">
            <ul onMouseOver={onHoverHandler} onMouseLeave={onMouseLeaveHandler} onClick={onClickHandler}>
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
    );
}

export default Navigation;