import './projects.styles.scss'
import ECommerse from '../../OtherFile/E-commerse.png'
import MyProfio from '../../OtherFile/personal-profolio.png'
import MonsterRolodex from '../../OtherFile/MonsterRolodex.png'
import ToDoList from '../../OtherFile/to-do-list.png'
const imgsrc=[ECommerse, MyProfio, MonsterRolodex, ToDoList]
const Projects = () => {
    
    return (
        <>
            <h1 className='header'>My Projects</h1>
            <div className="projects-section">
                <div className="projects-display">
                <div className='left-button'>{'<'}</div>
                <div className='right-button'>{'>'}</div>
                <div className='progress-bar'>
                    <ul>
                       
                            {
                                imgsrc.map((item, index)=>{
                                    return (
                                        <li key={index}>
                                            <img src={item}/>
                                        </li>
                                    )
                                })
                            }
                        
                    </ul>
                </div>
            </div>
                        <ul>
                            {
                                imgsrc.map(()=>{
                                    return <li></li>
                                })
                            }
                        </ul>
                    </div>
        </>
    )
}

export default Projects;