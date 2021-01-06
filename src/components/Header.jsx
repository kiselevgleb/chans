import React, { Fragment } from 'react';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import iconLogo from '../img/logo-big.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeInputCheckbox, getCityIdRequest, changeSearchField, getTicketsDataRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    // const { search, cities } = useSelector(state => state.skills);
    // const [city, setCity] = useState([]);
    // const dispatch = useDispatch();
    // const handleSearch = evt => {
    //     console.log(cities)
    //     const { value } = evt.target;
    //     // dispatch(changeSearchField(value));
    //     let mas = city;
    //     setCity(mas.concat(cities));
    // };
    const getTickets = (evt) => {
        evt.preventDefault();
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

    };
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
                                        <NavLink className="nav-link" exact to="/chans/build/">Why Rebuild</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/chans/build" >Batteries and Pricing</a> */}
                                        <NavLink className="nav-link" exact to="/chans/build/">Batteries and Pricing</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/chans/build/references" >About us and References</a> */}
                                        <NavLink className="nav-link" exact to="/chans/build/references">About us and References</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/chans/build/faq" >FAQ</a> */}
                                        <NavLink className="nav-link" exact to="/chans/build/faq">FAQ</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://chansbattery.ca/forum/index.php" >Forum</a>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link-end" href="/contacts" >Contact</a> */}
                                        {/* <a className="nav-link-end" href="/chans/build/contacts" >Contact</a> */}
                                        <NavLink className="nav-link" exact to="/chans/build/contacts">Contact</NavLink>


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
                            <form className="calc" onSubmit={getTickets}>
                                
                                <div className="inp-from-location">
                                    {/* <p className="calc-text-header">Message:</p> */}
                                    <p className="calc-text">Name*</p>
                                    <p className="inline">
                                        <input list="cities-from" id="from" className="inp-date" type="text" placeholder="Откуда" type="search"  />
                                    </p>
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Email address*</p>
                                    <input className="inp-date" id="date" type="mail"  />
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Your message</p>
                                    <input className="inp-date" id="date" type="text"  />
                                </div>
                                <button type="submit" className="but-from">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="line">
                </div>
            </header>
        </Fragment>)
}