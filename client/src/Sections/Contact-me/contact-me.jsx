import './contact-me.styles.scss'
import { useState } from "react"
import {send} from "@emailjs/browser"
import Button from '../../Components/Button/button.component'
const initialInput = {
    name: "",
    email: "",
    message: ""
}
const ContactMe = () => {
    const [input, setInput] = useState(initialInput)
    const onSendEmailHandler = async (e) => {
        e.preventDefault();
        try{
            await send('service_8zt22mm', 'template_iuxfqsm', input, 'Dx-r_chV0nqDqnuDI');
            alert("email sent!")
            setInput(initialInput)
        }catch(error){
            alert(error.text)
        }
    }
    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        e.target.parentNode.childNodes[1].className=e.target.value==''?'':'shrink';
    }
    return (
        <div className="contact-me">
            <h1>
                Contact Me
            </h1>
        <form onSubmit={onSendEmailHandler} onChange={onChangeHandler}>
            <span>
            <input htmltype="text" id="name" name="name" value={input.name} required onChange={()=>{}}/>
            <label htmlFor="name">Name</label>
            </span>
            <br/>
            <span>
            <input type="email" id="email" name="email" value={input.email} required onChange={()=>{}}/>
            <label htmlFor="email">Email</label>
            </span>
            <br/>
            <span>
            <textarea rows='5' type="text" id="message" name="message" value={input.message} required onChange={()=>{}}/>
            <label htmlFor="message">Message</label>
            </span>
            <Button>Send</Button>
        </form>
        </div>
    )   
}
export default ContactMe;