import React, { Fragment, useState } from 'react';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import iconLogo from '../img/logo-big.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeInputCheckbox, getCityIdRequest, changeSearchField, getTicketsDataRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'
// import mes from '../content/message/electric-bike.json';
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default function Header(props) {
    // const { search, cities } = useSelector(state => state.skills);
    const [state, setState] = useState({ name: "", email: "", message: "" });
    // const [email, setEmail] = useState("");
    // const [mes, setMes] = useState("");

    // const dispatch = useDispatch();
    // const handleSearch = evt => {
    //     console.log(cities)
    //     const { value } = evt.target;
    //     // dispatch(changeSearchField(value));
    //     let mas = city;
    //     setCity(mas.concat(cities));
    // };
    // const getTickets = (evt) => {
    // evt.preventDefault();
    // dispatch(getCityIdRequest(evt.target.from.value));
    // const { value } = evt.target.from;
    // changeSearchField(value);
    // dispatch(getCityIdRequest(evt.target.from.value));
    // const to = cities.filter(O => O.name === evt.target.to.value);
    // const from = city.filter(O => O.name === evt.target.from.value);

    // dispatch(changeInputCheckbox("from_city_id", from[0]._id));
    // dispatch(changeInputCheckbox("to_city_id", to[0]._id));
    // dispatch(changeInputCheckbox("date_start", evt.target.date.value));
    // dispatch(changeInputCheckbox("date_end", evt.target.date_end.value));

    // dispatch(getTicketsDataRequest({ "from_city_id": from[0]._id, "to_city_id": to[0]._id, "date_start": evt.target.date.value, "date_end": evt.target.date_end.value, }));
    // // }
    // props.history.push(`/order`);
    // };

    const handleSubmit = e => {
        console.log(state)
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
      const handleChange = e =>
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    // const handleChange = e => setState({state.e.target.name = e.target.value });

    // const sentMessage = (evt) => {
    //     evt.preventDefault();

    //     if (evt.target[0].value === "") {
    //         evt.target[0].className = "inp-date inp-date-border";
    //         console.log(111)

    //     } else {
    //         evt.target[0].className = "inp-date";

    //         alert('The message was sent');

    //     }

    //     console.log(evt.target[0].value)
    //     console.log(evt.target[1].value)
    //     console.log(evt.target[2].value)

    // };
    return (
        <Fragment>
            <header class="header-container">
                {/* <div className="wrap"> */}
                <div className="row header-contact" >
                    {/* <NavLink className="navbar-brand" exact to="/react-shoe-store/build/"> */}
                    {/* <img src='' alt="" /> */}
                    <p className="header-contact-text"> <a className="contact-link" href="tel:226-977-0998">Tel: 226-977-0998</a>, e-mail:<a className="contact-link" href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> </p>
                    {/* <p className="header-contact-text-right">8138 batteries rebuilt, 7 m3 waste reduced, 16 years' experience</p> */}
                    {/* </NavLink> */}
                </div>
                {/* </div> */}
                <nav className="navbar">
                    <div className="wrap">
                        <div className="row" >
                            <div className="col">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/chans/build" >Why Rebuild</a> */}
                                        <NavLink className="nav-link" exact to="/">Why Rebuild</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/chans/build" >Batteries and Pricing</a> */}
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
                                        {/* <a className="nav-link" href="/chans/build/references" >About us and References</a> */}
                                        {/* <NavLink className="nav-link" exact to="/chans/build/references">About us and References</NavLink> */}
                                        {/* <div class="dropdown-content">
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div> */}
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/references">About us and References</NavLink>
                                            <div class="dropdown-content">
                                                <NavLink className="nav-link-a" exact to="/references">Our clients say</NavLink>
                                                <NavLink className="nav-link-a" exact to="/blog">Blog</NavLink>
                                                <NavLink className="nav-link-a" exact to="/chans">Our Story</NavLink>
                                            </div>
                                        </div>
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
                                        {/* <a className="nav-link-end" href="/contacts" >Contact</a> */}
                                        {/* <a className="nav-link-end" href="/chans/build/contacts" >Contact</a> */}
                                        <NavLink className="nav-link" exact to="/contacts">Contact</NavLink>


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="wrap">
                    <div className="row left-text">
                        <div className="col d-none d-md-block">
                            <div className="wrap-text">
                                <img className="header-logo" src={iconLogo} alt="" />
                                <p className="header-text"><b className="header-text-green">C</b>ustomer Service</p>
                                <p className="header-text"><b className="header-text-green">H</b>onesty</p>
                                <p className="header-text"><b className="header-text-green">A</b>dvancement</p>
                                <p className="header-text"><b className="header-text-green">N</b>ature</p>
                                <p className="header-text"><b className="header-text-green">S</b>kills</p>
                            </div>
                        </div>
                        <div className="col">
                            {/* <form className="calc" onSubmit={sentMessage}>
                                <div className="inp-from-location">
                                    <p className="calc-text">Name*</p>
                                    <p className="inline">
                                        <input list="cities-from" id="from" className="inp-date" type="text" placeholder="Откуда" type="search" />
                                    </p>
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Email address*</p>
                                    <input className="inp-date" id="date" type="email" />
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Your message</p>
                                    <input className="inp-date" id="date" type="text" />
                                </div>
                                <button type="submit" className="but-from">SEND MESSAGE</button>
                            </form> */}
                            <form className="calc" name="contact" netlify netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                                <p>
                                    <label className="calc-text">Name* <input type="text" name="name" value={state.name} onChange={handleChange}/></label>
                                </p>
                                <p>
                                    <label className="calc-text">Email address* <input type="email" name="email" value={state.email} onChange={handleChange}/></label>
                                </p>
                                <p>
                                    <label className="calc-text">Your message<textarea name="message" value={state.message} onChange={handleChange}></textarea></label>
                                </p>
                                <p class="field"><div data-netlify-recaptcha="true"></div></p>
                                <p>
                                    <button type="submit" className="but-from">SEND MESSAGES</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="line">
                </div>
            </header>
        </Fragment>)
}