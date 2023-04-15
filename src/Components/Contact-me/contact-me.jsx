import { useState } from "react"
import {send} from "@emailjs/browser"
import Button from '../Button/button.component'
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
        }catch(error){
            alert(error.text)
        }
    }
    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(e.target.name)
    }
    return (
        <form onSubmit={onSendEmailHandler} onChange={onChangeHandler}>
            <label htmlFor="name">Name:</label>
            <input htmltype="text" id="name" name="name" value={input.name} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={input.email} />
            <label htmlFor="message">Message:</label>
            <textarea type="text" id="message" name="message" value={input.message} />
            <Button />
        </form>
    )
}
export default ContactMe;