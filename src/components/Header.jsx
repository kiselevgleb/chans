import React, { Fragment, useState } from 'react';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import iconLogo from '../img/logo-white.png';
import { NavLink } from 'react-router-dom'
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function Header(props) {
    const [state, setState] = useState({ name: "", email: "", message: "" });
    const handleSubmit = e => {
        if (state.name === "") {
            e.target[0].className = "inp-date inp-date-border";
        }
        else if (state.email === "") {
            e.target[1].className = "inp-date inp-date-border";
        }
        else {
            console.log(state)
            e.target[0].className = "inp-date";
            e.target[1].className = "inp-date";
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
            <header class="header-container">
                <div className="wrap-cont">
                    <div className="row header-contact" >
                        {/* <div className="wrap"> */}
                        {/* <p className="header-contact-text"> <b>8216</b> batteries rebuilt. <a className="contact-link" href="tel:+1226-977-0998">Tel: +1 226-977-0998</a>, e-mail: <a className="contact-link" href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> <a className="contact-link" href="mailto:chansbattery@gmail.com">chansbattery@gmail.com</a> </p> */}
                        <div className="header-contact-text-left col-md-3">
                            <p className="header-contact-text"> <b>8216</b> batteries rebuilt.</p>
                        </div>
                        {/* <div className="col"></div> */}
                        <div className="header-contact-text-right col-md-9">
                            <p className="header-contact-text"><a className="contact-link" href="tel:+1226-977-0998">Tel: +1 226-977-0998</a>, e-mail: <a className="contact-link" href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> <a className="contact-link" href="mailto:chansbattery@gmail.com">chansbattery@gmail.com</a> </p>
                        </div>

                        {/* <div className="col header-text-left">   <p className="header-contact-text"><b>8216</b> batteries rebuilt <b>8m3</b> waste reduced <b>17</b> years’ experience</p></div> */}
                        {/* <p className="header-contact-text"><b>8216</b> batteries rebuilt <b>8m3</b> waste reduced <b>17</b> years’ experience</p> */}
                    </div>
                </div>
                <nav className="navbar">
                    <div className="wrap">
                        <div className="row" >
                            <div className="col">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/">Why Rebuild</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/ebike-battery-rebuild">Batteries and Pricing</NavLink>
                                            <div class="dropdown-content">
                                                <NavLink className="nav-link-a" exact to="/ebike-battery-rebuild">Electric bikes</NavLink>
                                                <NavLink className="nav-link-a" exact to="/drill-battery-rebuild">Power Tools</NavLink>
                                                <NavLink className="nav-link-a" exact to="/laptop-battery-rebuild">Laptops</NavLink>
                                                <NavLink className="nav-link-a" exact to="/air-respirator-battery-rebuild">Air Respirators</NavLink>
                                                <NavLink className="nav-link-a" exact to="/barcode-scanner-battery-rebuild">Barcode Scanners</NavLink>
                                                <NavLink className="nav-link-a" exact to="/cable-tester-battery-rebuild">Cable Testers</NavLink>
                                                <NavLink className="nav-link-a" exact to="/dive-vehicle-battery-rebuild">Dive Vehicles</NavLink>
                                                <NavLink className="nav-link-a" exact to="/flash-battery-rebuild">Flash systems</NavLink>
                                                <NavLink className="nav-link-a" exact to="/lawn-care-battery-rebuild">Lawn Care Tools</NavLink>
                                                <NavLink className="nav-link-a" exact to="/spectrum-analyzer-battery-rebuild">Spectrum Analyzers</NavLink>
                                                <NavLink className="nav-link-a" exact to="/survey-instrument-battery-rebuild">Survey Instruments</NavLink>
                                                <NavLink className="nav-link-a" exact to="/vacuum-cleaners-battery-rebuild">Vacuum cleaners</NavLink>
                                                <NavLink className="nav-link-a" exact to="/build/battery-rebuild">Other Equipment</NavLink>

                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/chans">About us</NavLink>
                                            {/* <div class="dropdown-content"> */}
                                                {/* <NavLink className="nav-link-a" exact to="/references">Our clients say</NavLink> */}
                                                {/* <NavLink className="nav-link-a" exact to="/blog">Blog</NavLink> */}
                                                {/* <NavLink className="nav-link-a" exact to="/chans">Our Story</NavLink> */}
                                            {/* </div> */}
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/references">Reviews</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/faq">FAQ</NavLink>
                                            <div class="dropdown-content">
                                                <NavLink className="nav-link-a" exact to="/faq">You Ask</NavLink>
                                                <NavLink className="nav-link-a" exact to="/warranty">Warranty</NavLink>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://chansbattery.ca/forum/index.php" >Forum</a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/contacts">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="wrap">
                    <div className="row left-text">
                        <div className="col">
                            <div className="wrap-text">
                                <img className="header-logo" src={iconLogo} alt="" />
                                <p className="header-text"><b className="header-text-green">C</b>ustomer Service</p>
                                <p className="header-text"><b className="header-text-green">H</b>onesty</p>
                                <p className="header-text"><b className="header-text-green">A</b>dvancement</p>
                                <p className="header-text"><b className="header-text-green">N</b>ature</p>
                                <p className="header-text"><b className="header-text-green">S</b>kills</p>
                            </div>
                        </div>
                        {/* <div className="col">
                            <form className="calc" onSubmit={handleSubmit} data-netlify-recaptcha="true">
                                <div className="inp-from-location">
                                    <p className="calc-text">Name*</p>
                                    <p className="inline">
                                        <input list="cities-from" id="from" className="inp-date" placeholder="Name" type="text" name="name" value={state.name} onChange={handleChange} />
                                    </p>
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Email address*</p>
                                    <input className="inp-date" id="date" type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
                                </div>
                                <div className="inp-from-date">
                                    <label className="calc-text">Your message<textarea className="inp-date" placeholder="Message" name="message" value={state.message} onChange={handleChange}></textarea></label>
                                </div>
                                <div data-netlify-recaptcha="true"></div>
                                <button type="submit" className="but-from">SEND MESSAGE</button>
                            </form>
                        </div> */}
                    </div>
                </div>
                {/* <div className="line line-bottom"> */}
                {/* </div> */}
            </header>
        </Fragment>)
}