import React, { Fragment, useState  } from 'react';
import { NavLink } from 'react-router-dom'
import phone from '../img/phone.png';
import skype from '../img/skype.png';
import vector from '../img/vector.png';
import mail from '../img/mail.png';
import f from '../img/f.png';
import str from '../img/str.png';
import iconLogo from '../img/logo-white.png';
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
export default function Footer(props) {
    const [state, setState] = useState({ name: "", email: "", message: "" });
    const handleSubmit = e => {
        if (state.name === "") {
            e.target[0].className = "inp-sent inp-date-border";
        }
        else if (state.email === "") {
            e.target[1].className = "inp-sent inp-date-border";
        }
        else {
            console.log(state)
            e.target[0].className = "inp-sent";
            e.target[1].className = "inp-sent";
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...state })
            })
                .then(() => alert("The message was sent!"))
                .catch(error => alert(error));

            setState({ name: "", email: "", message: "" });
        }
        e.preventDefault();
    };
    const handleChange = e =>
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    return (
        <Fragment>
            <footer className="fb-container" id="contact">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2 className="h2-black h2-mar">Contact us</h2>
                            <div className="fb-cont">
                                <img className="fb-point" src={phone} alt="next"></img>
                                <a className="contact-link" href="tel:+1-226-977-0998">Tel: +1 226-977-0998</a>

                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={mail} alt="next"></img>
                                <a className="contact-link" href="mailto:info@chansbattery.ca">info@chansbattery.ca</a>

                            </div>
                            <div className="fb-cont">
                                <img className="fb-point-small" src={f} alt="Facebook"></img>
                                <a className="contact-link" href="https://www.facebook.com/chansbatteryrebuild" >  Facebook</a>
                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={vector} alt="next"></img>
                                <p className="fb-text">London <br></br>ON Canada</p>
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="h2-black h2-mar">Message</h2>
                            <div>
                                <form className="fb-cont fb-form" onSubmit={handleSubmit} data-netlify-recaptcha="true">
                                    <p className="calc-text">Name*</p>
                                    <input className="inp-sent" type="text" placeholder="Name" name="name" value={state.name} onChange={handleChange}/>
                                    <p className="calc-text">Email address*</p>
                                    <input className="inp-sent" type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
                                    <p className="calc-text">Your message</p>
                                    <textarea className="inp-sent" placeholder="Message" name="message" value={state.message} onChange={handleChange}></textarea>
                                    <button type="submit" className="but-sent">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fb-line">
                </div>
                <div className="wrap block">
                    <div className="row fb-down">
                        <div className="col left">
                            <NavLink className="navbar-brand" exact to="/">
                                <img className="fb-logo" src={iconLogo} alt="" />
                            </NavLink>
                        </div>
                        <div className="col center">

                            <img className="fb-str" src={str} alt="UP" onClick={() => {window.scrollTo(0, 0)}}></img>
                        </div>
                        <div className="col right">
                            <p className="fb-text"><b>2021</b><a href="https://github.com/kiselevgleb">GK</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
