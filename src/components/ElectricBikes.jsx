import React, { Fragment, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Bionx from '../img/bionx.jpg';
import ref from '../content/batteries/battery.json';
import parse from 'react-render-html'
import Liion from '../img/liion_drill_battery.jpg';
import Nicd from '../img/nicd_drill_battery.jpg';
import Dyson from '../img/dyson.jpg';
import Laptop_battery from '../img/laptop_battery.jpg';
import Laptop from '../img/laptop.jpg';
import M from '../img/3M_Adflo.jpg';
import Honeywell from '../img/honeywell.jpg';
import FlashBattery from '../img/flash-battery.jpg';
import DiveVehicle from '../img/dive_vehicle.jpg';

import Golf from '../img/golf.jpg';
import Ice from '../img/ice.jpg';
import Analyzers from '../img/Analyzers.jpg';
import Survey from '../img/Survey.jpg';
import Barcode from '../img/Barcode.jpg';
import Solowheel from '../img/Solowheel.jpg';
import Converting from '../img/Converting.jpg';
import Packs from '../img/Packs.jpg';
import Snow from '../img/Snow.jpg';
import Spectrum from '../img/spectrum-r&h.jpg';
import Greenworks from '../img/greenworks.jpg';
import classNames from 'classnames/bind';


export default function ElectricBikes(props) {
    const [textArea, setTextArea] = useState("");
    const [textId, setTextId] = useState("");
    
    const handleMove = id => {
        if (textArea === "" || textArea !== ref.text[id].text) {
            setTextArea(ref.text[id].text)
        }
        else if (textArea === ref.text[id].text) {
            setTextArea("")
        }
        setTextId(id)
    }

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col bat-list">
                        {ref.text.map(o =>
                            <div className="col feedback" onClick={() => handleMove(o.id)}>
                                <section className="top-sales">
                                    <h4 className={classNames({"mar-list": true, "list-bold": o.id==textId})} key={o.id} onClick={(e) => { window.scrollTo(0, 500);}}>{o.header}</h4>
                                </section>
                            </div>
                        )}
                    </div>
                    <div className="col">
                        <section className="top-sales ">
                            {parse(textArea)}
                            {parse(ref.contact)}
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}