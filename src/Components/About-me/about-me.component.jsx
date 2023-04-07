import './about-me.styles.scss'
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
        skill: 'firebase'
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
    // const onMouseHandler=()=>{

    // }
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className='stick-notes'>
                <div className='stick-note about-me'>
                    <div className='pin'>
                        <div />
                    </div>
                    <p>Hey there! </p>
                    <p>
                        I'm Yutong, a Mechatronics Engineering student at the University of Waterloo. I've been coding since high school, but fell in love with programming thanks to an awesome professor in my first year. I'm particularly interested in frontend technologies, and love tinkering with code to create new things. Thanks for visiting my website, and feel free to check out my work!
                    </p>
                </div>

                <div className='stick-note skills'>
                    <div className='pin'>
                        <div />
                    </div>

                    <div className='skills-title'>
                        <p>What do I know?</p>
                        <input />
                    </div>

                    {
                        skills.map(({ imgUrl }, i) => {
                            return (
                                <div key={i}>
                                    <img src={imgUrl} />
                                    {/* <p>{skill}</p> */}
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