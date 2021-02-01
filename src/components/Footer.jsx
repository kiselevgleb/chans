import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import phone from '../img/phone.png';
import skype from '../img/skype.png';
import vector from '../img/vector.png';
import mail from '../img/mail.png';
import f from '../img/f.png';
import str from '../img/str.png';
import iconLogo from '../img/logo-white.png';
export default function Footer(props) {

    return (
        <Fragment>
            <footer className="fb-container" id="contact">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2 className="h2-black h2-mar">Contact us</h2>
                            <div className="fb-cont">
                                <img className="fb-point" src={phone} alt="next"></img>
                                {/* <p className="fb-text">226-977-0998</p> */}
                                <a className="contact-link" href="tel:226-977-0998">Tel: 226-977-0998</a>

                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={mail} alt="next"></img>
                                {/* <p className="fb-text">info@chansbattery.ca</p> */}
                                <a className="contact-link" href="mailto:info@chansbattery.ca">info@chansbattery.ca</a>

                            </div>
                            <div className="fb-cont">
                                {/* <img className="fb-point" src={skype} alt="next"></img> */}
                                {/* <p className="fb-text">skype</p> */}
                                <img className="fb-point-small" src={f} alt="Facebook"></img>
                                <a className="contact-link" href="https://www.facebook.com/chansbatteryrebuild" >  Facebook</a>

                                {/* <p className="fb-text">skype</p> */}
                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={vector} alt="next"></img>
                                <p className="fb-text">London <br></br>On Canada</p>
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="h2-black h2-mar">Message</h2>
                            {/* <div className="fb-cont">
                                <p className="fb-text">Будьте в курсе событий</p>
                            </div> */}
                            <div>
                                <form className="fb-cont fb-form" onSubmit='#'>
                                    <p className="calc-text">Name*</p>
                                    <input className="inp-sent" type="text" placeholder="e-mail" />
                                    <p className="calc-text">Email address*</p>
                                    <input className="inp-sent" type="text" placeholder="e-mail" />
                                    <p className="calc-text">Your message</p>
                                    <input className="inp-sent" type="text" placeholder="e-mail" />
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

                            <img className="fb-str" src={str} alt="UP"></img>
                        </div>
                        <div className="col right">
                            <p className="fb-text"><b>2021 WEB</b></p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
