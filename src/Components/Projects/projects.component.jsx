import './projects.styles.scss'
import ECommerse from '../../OtherFile/E-commerse.png'
import MyProfio from '../../OtherFile/personal-profolio.png'
import MonsterRolodex from '../../OtherFile/MonsterRolodex.png'
import ToDoList from '../../OtherFile/to-do-list.png'
import StairClimbingRobot from '../../OtherFile/1AFinalProject.jpg'
import Button from '../Button/button.component'

const projs = [{
    urlGit: "https://github.com/YutongZhuu/E-Commerse-Web",
    url: "https://e-commerse-ytz.netlify.app",
    imgurl: ECommerse,
    name: 'eCommerse Website',
    tech: 'React/Firebase/SASS/Redux',
    content: "This is an e-commerce website built on React.js and Redux. Fast, and user-friendly platform leverages React's component-based architecture and virtual DOM, along with Redux's state management capabilities. We've also integrated Firebase APIs for easy database management and authentication. "

}, {
    urlGit: "https://github.com/YutongZhuu/my-profolio",
    imgurl: MyProfio,
    name: 'Personal Website',
    tech: 'React/SASS',
    content: "My personal portfolio website is built with React and styled with Sass for enhanced layout control. It features a responsive design and a carefully crafted UI/UX for a seamless user experience. The website showcases my skills in web development and passion for designing engaging and user-friendly interfaces."
}, {
    urlGit: "https://github.com/YutongZhuu/Monster-Rolodex",
    url: "https://monsterrolodex-ytz.netlify.app",
    imgurl: MonsterRolodex,
    name: 'Monster Rolodex',
    tech: 'React/CSS',
    content: "This project is built with React and focuses on practicing JSX syntax, hooks, class and function components. Gain valuable experience and deepen my understanding of React's core concepts through experimentation and building different components."
}, {
    imgurl: ToDoList,
    urlGit: "https://github.com/YutongZhuu/To-Do-List",
    name: 'To-Do List',
    tech: 'JQuery/CSS/JavaScript',
    content: "This project is a to-do list built with jQuery, where you can practice your JavaScript and jQuery skills while implementing and customizing various to-do list features. Gain a deeper understanding of CSS and HTML while you style and structure the to-do list to suit your preferences."
},{
    urlGit: 'https://github.com/YutongZhuu/Stair-Climbing-Robot-',
    url:"https://www.youtube.com/shorts/80WDnjtPzlc",
    imgurl: StairClimbingRobot,
    name: 'Stair Climbing Robot',
    tech: 'C/RobotC',
    content: "Designed as a final project for the Digital Computation and Mechatronics Engineering courses, this robot built with RobotC IDE is capable of climbing stairs. The project addresses a real-world problem and aims to showcase proficiency in C programming and mechatronics engineering principles."
}]
const Projects = () => {

    return (
        <>
            <h1 className='header'>My <span>Projects
                </span></h1>
            <div className="projects-section">
                {
                    projs.map((proj, id) => {
                        return (
                            <div className="projects-display" key={id}>
                                <div className="front">
                                    <img src={proj.imgurl} />
                                    <div>
                                        <h2>
                                            {proj.name}
                                        </h2>
                                        <p>
                                            {proj.tech}
                                        </p>
                                    </div>
                                </div>
                                <div className='back'>
                                    <h2>
                                        {proj.name}
                                    </h2>
                                    <p>
                                        {proj.content}
                                    </p>
                                    <div>
                                        <Button url={proj.urlGit}>Repo</Button>
                                        {id == 1 || id == 3 ? null : <Button url={proj.url}>{id===4?'Demo':'Try It'}</Button>}
                                    </div>
                                </div>
                                <div className={id % 2 === 0 ? 'line' : ''} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Projects;