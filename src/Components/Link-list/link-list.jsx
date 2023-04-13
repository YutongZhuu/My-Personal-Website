import { ReactComponent as LinkedInIcon } from "../../OtherFile/linkedIn.icon.svg"
import { ReactComponent as GithubIcon } from "../../OtherFile/Github.icon.svg"
import { ReactComponent as ResumeIcon } from "../../OtherFile/resume.icon.svg"
import resumeImg from '../../OtherFile/resume.png'
import './link-list.styles.scss'
const LinkLists = () => {
    // const [isResumeOpen, setIsResumeOpen]=useState(false)
    const onOpenResumeHander=(e)=>{
        e.preventDefault()
        let li=e.target;
        while(li.tagName!="LI"){
            li=li.parentNode;
        }
        // console.log(li.parentNode.parentNode.childNodes[1].style.display)
        const disPlayOrNot=(li.parentNode.parentNode.childNodes[1].style.display=='block'?'':'block')
        li.style.backgroundColor=disPlayOrNot=='block'?'rgba(0,0,0,0.3)':''; 
        li.parentNode.parentNode.childNodes[1].style.display=disPlayOrNot;
        // li.parentNode.parentNode.childNodes[1]

    }
    return (
        <div className="links">
            <ul className="link-list"> 
                <li>
                    <a href="https://www.linkedin.com/in/yutongzhu27" target="_blank">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/YutongZhuu" target="_blank">
                        <GithubIcon />
                    </a>
                </li>
                <li onClick={onOpenResumeHander}  >
                    <a href="">
                        <ResumeIcon />
                    </a>
                </li>
            </ul>
            <div className="resume">
             <img src={resumeImg}alt="resume"/>
            </div>
        </div>
    )
}

export default LinkLists