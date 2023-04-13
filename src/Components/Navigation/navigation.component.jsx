import './navigation.styles.scss';
import { ReactComponent as HomeIcon } from '../../OtherFile/home.icon.svg';
import { ReactComponent as AboutMeIcon } from '../../OtherFile/about-me.icon.svg';
import { ReactComponent as ContactMeIcon } from '../../OtherFile/contact-me.icon.svg';
import { ReactComponent as ProjectsIcon } from '../../OtherFile/projects.icon.svg';
import { useEffect, useState } from 'react';
import { scroll } from '../../Animation/scroll.animate';
import LinkLists from '../Link-list/link-list';
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
                return h.offsetTop-100
        });
        setHeaders(headersArray)
        const nav_bar=document.getElementsByClassName('nav-bar')
        const scrollHandler = () => {
            if(window.scrollY>50){
                // console.log(nav_bar[0].className)
                nav_bar[0].className='nav-bar nav-background'
                // nav_bar[0].style.height
                // const timer=setInterval(()=>{
                //     nav_bar[0].style.height=20*window.innerWidth/100+'px';
                //     console.log(nav_bar[0].style.height)
                //     if(window.innerHeight>window.innerWidth) return 
                //     nav_bar[0].style.height=parseInt(nav_bar[0].style.height-200)
                //     if(parseInt(nav_bar[0].style.height==0))clearInterval(timer)
                // }, 1)
            }else{
                nav_bar[0].className='nav-bar'
            }
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

    const onMouseLeaveHandler = () => {
        const scrollEvent = new Event('scroll');
        document.dispatchEvent(scrollEvent);
    }

    const onClickHandler = (event) => {
        setIconClicked(true);
        let target = event.target;
        if (target.tagName != 'LI' && target.tagName != 'svg' && target.tagName != 'path')
            return
        while (target && target.tagName !== 'LI') {
            target = target.parentNode;
        }

        const iconNumber = Array.from(target.parentNode.childNodes).findIndex((i) => i == target);
        console.log(headers[iconNumber])
        scroll(headers[iconNumber], 500);
        setTimeout(() => {
            setIconClicked(false);
        }, 500)
    }

    return (
        <div className='nav-bar'>
            <LinkLists />
            <div className="navigation">
                <ul onMouseOver={onHoverHandler} onMouseLeave={onMouseLeaveHandler} onClick={onClickHandler} >
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
        </div>
    );
}

export default Navigation;