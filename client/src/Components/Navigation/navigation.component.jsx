/*
A React component for a navigation bar.
The component uses useState and useEffect hooks from React for state management and side-effect handling respectively.
The component renders either an IconList or a WordList component based on the orientation prop.
*/
import './navigation.styles.scss';
import { useEffect, useState } from 'react';
import { useScroll } from '../../Hooks/useScroll';
import LinkLists from '../Link-list/link-list';
import IconList from '../Icon-List/Icon-List';
import WordList from '../Word-List/word-list.component';

const findBetweenArrayElements = (number, array) => { //Function that is used for determine which section the viewer is in
    for (let i = 0; i < array.length; i++) {
        if (number >= array[i] && (array[i + 1] ? number < array[i + 1] : true)) {
            return i;
        } else if (number == 0) {
            return 0;
        }
    }
}

const Navigation = ({ orientation }) => {

    const [cancel, scroll] = useScroll();
    const [headers, setHeaders] = useState(null);
    const [iconClicked, setIconClicked] = useState(false)


    const onHoverHandler = (event) => {//Function triggers when mouseover
        setIconClicked(true)
        if (event.target.tagName == 'LI' || event.target.tagName == 'P') {
            while (event.target.tagName != 'LI') {
                event.target = event.target.parentNode;
            }
            for (let i = 0; i < event.target.parentNode.childNodes.length; i++) {
                event.target.parentNode.childNodes[i].className = ""
            }
            event.target.className = 'target-icon';
        }
    }

    const onMouseLeaveHandler = () => {//Function used for mouseLeave
        setIconClicked(false)
        const scrollEvent = new Event('scroll');
        document.dispatchEvent(scrollEvent);
    }

    const onClickHandler = (event) => {//Function used for the click Event
        let target = event.target;
        if (target.tagName != 'LI' && target.tagName != 'svg' && target.tagName != 'path' && target.tagName != 'P')
            return
        while (target && target.tagName !== 'LI') {
            target = target.parentNode;
        }

        const iconNumber = Array.from(target.parentNode.childNodes).findIndex((i) => i == target);
        scroll(headers[iconNumber]);
    }

    useEffect(() => {
        const headersArray = Array.from(document.querySelectorAll('h1')).map((h, i) => {
            if (i == 0)
                return 0;
            else
                return h.offsetTop - 90;
        });
        setHeaders(headersArray)
        const nav_bar = document.getElementsByClassName('nav-bar')
        const scrollHandler = () => {
            if (window.scrollY > 50) {
                nav_bar[0].className = 'nav-bar nav-background'
            } else {
                nav_bar[0].className = 'nav-bar'
            }
            if (iconClicked) return
            const icons = document.querySelectorAll('.navigation li')
            const iconNumber = findBetweenArrayElements(window.scrollY, headersArray)
            icons.forEach((i) => {
                i.className = '';
            })
            iconNumber ? icons[iconNumber].className = 'target-icon' : icons[0].className = 'target-icon'
        }
        document.addEventListener('scroll', scrollHandler);
        const scrollEvent = new Event('scroll');
        document.dispatchEvent(scrollEvent);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [iconClicked])
    
    useEffect(()=>{
        const cancelhandler=()=>{
            cancel();
        }
        document.addEventListener('wheel', cancelhandler);
        return ()=>{
            document.removeEventListener('wheel', cancelhandler);
        }
    })

    return (

        <div className='nav-bar'>
            <LinkLists />
            <div className="navigation">
                {orientation ? <IconList
                    onMouseLeaveHandler={onMouseLeaveHandler}
                    onHoverHandler={onHoverHandler}
                    onClickHandler={onClickHandler} /> : <WordList
                    onMouseLeaveHandler={onMouseLeaveHandler}
                    onHoverHandler={onHoverHandler}
                    onClickHandler={onClickHandler} />}
            </div>
        </div>
    );
}

export default Navigation;