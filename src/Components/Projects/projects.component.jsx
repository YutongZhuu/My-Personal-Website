import './projects.styles.scss'
import ECommerse from '../../OtherFile/E-commerse.png'
import MyProfio from '../../OtherFile/personal-profolio.png'
import MonsterRolodex from '../../OtherFile/MonsterRolodex.png'
import ToDoList from '../../OtherFile/to-do-list.png'
import Button from '../Button/button.component'

const projs = [{
    urlGit:"https://github.com/YutongZhuu/E-Commerse-Web",
    url:"https://e-commerse-ytz.netlify.app",
    imgurl: ECommerse,
    name: 'eCommerse Website',
    tech: 'React/Firebase/SASS/JavaScript',
    content: "This is an e-commerce website built on React.js and Redux. Fast, and user-friendly platform leverages React's component-based architecture and virtual DOM, along with Redux's state management capabilities. We've also integrated Firebase APIs for easy database management and authentication. "

}, {
    imgurl: MyProfio,
    name: 'Personal Profolio',
    tech: 'React/SASS/JavaScript',
    content: ""
}, {
    imgurl: MonsterRolodex,
    name: 'Monster Rolodex',
    tech: 'React/CSS/JavaScript',
    content: ""
}, {
    imgurl: ToDoList,
    name: 'To-Do List',
    tech: 'JQuery/CSS/JavaScript',
    content: ""
},{
    imgurl: ToDoList,
    name: 'To-Do List',
    tech: 'JQuery/CSS/JavaScript',
    content: ""
}]
const Projects = () => {

    return (
        <>
            <h1 className='header'>My Projects</h1>
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
                                    <Button url={proj.url}>Try It</Button>
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