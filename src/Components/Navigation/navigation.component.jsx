import './navigation.styles.scss';

import { useEffect, useState } from 'react';
import { scroll } from '../../Animation/scroll.animate';
import LinkLists from '../Link-list/link-list';
import IconList from '../Icon-List/Icon-List';
import WordList from '../Word-List/word-list.component';
const Navigation = ({orientation}) => {
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
                return h.offsetTop-(window.innerWidth<window.innerHeight? 0 : 80)
        });
        setHeaders(headersArray)
        const nav_bar=document.getElementsByClassName('nav-bar')
        const scrollHandler = () => {
            if(window.scrollY>50){
                nav_bar[0].className='nav-bar nav-background'
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
        if (event.target.tagName == 'LI'|| event.target.tagName == 'P') {
            while(event.target.tagName!='LI'){
                event.target=event.target.parentNode;
            }
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
        console.log(1)
        setIconClicked(true);
        let target = event.target;
        if (target.tagName != 'LI' && target.tagName != 'svg' && target.tagName != 'path' &&  target.tagName != 'P')
            return
        while (target && target.tagName !== 'LI') {
            target = target.parentNode;
        }

        const iconNumber = Array.from(target.parentNode.childNodes).findIndex((i) => i == target);
        scroll(headers[iconNumber], 500);
        setTimeout(() => {
            setIconClicked(false);
        }, 500)
    }

    return (

        <div className='nav-bar'>
            <LinkLists />
            <div className="navigation">
                {orientation?<IconList
                onMouseLeaveHandler={onMouseLeaveHandler}
                onHoverHandler={onHoverHandler}
                onClickHandler={onClickHandler}/>:<WordList
                onMouseLeaveHandler={onMouseLeaveHandler}
                onHoverHandler={onHoverHandler}
                onClickHandler={onClickHandler}/>}
            </div>
        </div>
    );
}

export default Navigation;