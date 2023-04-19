import './about-me.styles.scss';
import { useState } from 'react';
const skills = [
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
        skill: 'JavaScript'
    }, {
        imgUrl: "https://www.clipartkey.com/mpngs/m/210-2104705_html-logo-png-transparent-background.png",
        skill: 'HTML'
    }, {
        imgUrl: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png",
        skill: 'CSS'
    }, {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        skill: 'React'
    }, {
        imgUrl: "https://tse4.mm.bing.net/th?id=OIP.7fAYr16fpNziTTjiS57IKAHaGs&pid=Api&P=0",
        skill: 'Redux'
    }, {
        imgUrl: "https://p7.hiclipart.com/preview/662/163/583/web-development-jquery-ui-javascript-computer-icons-jqlogo.jpg",
        skill: 'JQuery'
    }, {
        imgUrl: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
        skill: 'Firebase'
    }, {
        imgUrl: "https://twoearsonemouthnet.files.wordpress.com/2018/04/azure-icon-250x250.png?w=1040",
        skill: 'Microsoft Azure'
    }, {
        imgUrl: "https://educatech.in/wp-content/uploads/2021/09/kissclipart-c-c-icon-clipart-the-c-programming-language-th-d64c93203a84b298.jpg",
        skill: 'C++'
    }, {
        imgUrl: "https://tse4.mm.bing.net/th?id=OIP.Y3s6BU5TXkvi8hJKm-i_TgHaHa&pid=Api&P=0",
        skill: 'Git'
    }
]
const AboutMe = () => {
    const [inputValue, setInputValue] = useState("");
    const [timer, setTimer] = useState(null);

    const onHoverHandler = (event) => {
        setInputValue("");
        const input = event.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1];
        const name = event.target.name + " !";
        let counter = 0;

        input.focus();

        clearInterval(timer)
        const Timer = setInterval(() => {
            setInputValue(name.slice(0, counter));
            counter++;
            if (counter > name.length) {
                clearInterval(Timer);
            }
        }, 40);
        setTimer(Timer);
    };
    return (
        <div className="about-me">
            <div className='about-me-intro'>
                <h1><span>About</span> Me</h1>
                <div>
                    <div>
                        I'm Yutong, a <span>
                            Mechatronics Engineering
                            student at the University of Waterloo
                        </span> . I've been coding since high school, but fell in love with programming thanks to an awesome professor in my first year. I'm particularly interested in frontend technologies, and love tinkering with code to create new things. Thanks for visiting my website, and feel free to check out my work!
                    </div>
                </div>
            </div>

            <div className='skill-section'>
                <div className='skills-title'>
                    <p>What do I know?</p>
                    <input value={inputValue} onChange={()=>{}}/>
                </div>

                <div className='skills'>
                    {
                        skills.map(({ imgUrl, skill }, i) => {
                            return (
                                <div key={i}>
                                    <img src={imgUrl} name={skill} onMouseEnter={onHoverHandler} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>


        </div>

    )
}

export default AboutMe;