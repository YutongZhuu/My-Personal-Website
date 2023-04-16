import { ReactComponent as LinkedInIcon } from "../../OtherFile/linkedIn.icon.svg"
import { ReactComponent as GithubIcon } from "../../OtherFile/Github.icon.svg"
import { ReactComponent as ResumeIcon } from "../../OtherFile/resume.icon.svg"
import { ReactComponent as EmailIcon } from "../../OtherFile/email.icon.svg"
import './link-list.styles.scss'
const LinkLists = () => {
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
                <li >
                    <a href="https://drive.google.com/file/d/1fGTyLtwLKEITbj2IGelMuPBgopKWjPWQ/view?usp=sharing" target="_blank">
                        <ResumeIcon />
                    </a>
                </li>
                <li >
                    <a href="mailto:y25zhu@uwaterloo.ca" target="_blank">
                        <EmailIcon />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LinkLists