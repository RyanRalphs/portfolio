import React, { useState } from "react";
import background from "./images/mailz.jpeg"
import loading from "./images/load2.gif"
import scrollService from "../../utils/scrollService";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import animations from "../../utils/animations";
import Typical from 'react-typical'
import "./Contact.css"
import axios from 'axios'
import {toast} from 'react-toastify'

export default function Contact(props)
{
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== screen) {
            return
        }
        animations.animations.fadeInScreen(props.id)
    }

    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const submitForm = async (event) => {
        event.preventDefault()

        try{
            let data = {
                name,
                email,
                message
            }

            setBool(true)
            const res = await axios.post(`/contact`, data)
            if(name.length === 0 || email.length === 0 || message.length === 0 ) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            }else if(res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)
            }
        }catch (error) {
            console.log(error)
        }
    
    }


    return (
        <div className="contact-main" id={props.id || ""}>
            <ScreenHeading title={"Contact"} subHeading={"Feel free to get in touch!"}/>
            <div className="central-form">
                <div className="col">
                <h2 className="title">
                            
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Hiring?", 1000,
                                        "Want to know more?", 1000,
                                        "Want to chat?", 1000,
                                                        ]}
                                />
                            </h2>

                            <a href="https://www.linkedin.com/in/ryan-ralphs-0465a7169/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://github.com/ryanralphs">
                                <i className="fa fa-github-square"></i>
                            </a>
                            <a href="https://twitter.com/ryanjralphs">
                                <i className="fa fa-twitter-square"></i>
                            </a>

                </div>
                <div className="back-form">
                    <div className="background">
                        <h4>Send Your Email Here!</h4>
                        <img src={background} alt="ooopsy!!"/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name" >Name</label>
                        <input type='text'
                        onChange={handleName} value={name} />


                        <label htmlFor="email" >Email</label>
                        <input type='email'
                        onChange={handleEmail} value={email}/>


                        <label htmlFor="message" >Message</label>
                        <textarea type='text'
                        onChange={handleMessage} value={message}/>

                        <div className="send-btn">
                            <button type="submit" >
                                Send <i className="fa fa-paper-plane"/>
                                {bool ? (<b className='load'><img src={loading} alt="Ooopsy!!"/></b>) : ("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}