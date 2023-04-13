import './projects.styles.scss'
import ECommerse from '../../OtherFile/E-commerse.png'
import MyProfio from '../../OtherFile/personal-profolio.png'
import MonsterRolodex from '../../OtherFile/MonsterRolodex.png'
import ToDoList from '../../OtherFile/to-do-list.png'
import Button from '../Button/button.component'

const imgsrc = [{
    url: ECommerse,
    name: 'eCommerse Website',
    tech: 'React/Firebase/SASS/JavaScript',
    content: ""

}, {
    url: MyProfio,
    name: 'Personal Profolio',
    tech: 'React/SASS/JavaScript',
    content: ""
}, {
    url: MonsterRolodex,
    name: 'Monster Rolodex',
    tech: 'React/CSS/JavaScript',
    content: ""
}, {
    url: ToDoList,
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
                    imgsrc.map((proj, id) => {
                        return (
                            <div className="projects-display" key={id}>
                                <div className="front">
                                    <img src={proj.url} />
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
                                    <p></p>
                                    {proj.content}
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