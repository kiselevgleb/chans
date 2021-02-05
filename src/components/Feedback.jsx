import React, { Fragment, useState, useEffect } from 'react';
import point from '../img/point.png';
import ref2 from '../content/reference/references.json';

export default function Feedback(props) {
    let text = ref2.text;
    let arr = text.split('\n\n');
    let ref = [];
    let id = 0;
    arr.forEach(e => {
        ref.push({
            "id": id,
            "header": e.split("\"header\":")[1].split("\"contact\":")[0].slice(2, -4),
            "contact": e.split("\"contact\":")[1].split("\"text\":")[0].slice(2, -4),
            "text": e.split("\"text\":")[1].slice(2, -2),  
        });
        id++;
    });
    const [refData, setRefData] = useState(ref.slice(0, 3));

    const handleMove = evt => {
        evt.target.parentNode.childNodes.forEach(e => {
            e.className = "point point-light";
        });
        setRefData(ref.slice(evt.target.id * 3, evt.target.id * 3 + 3));
        evt.target.className = "point";
    }
    return (
        <Fragment>
            <main className="container" id="feedback">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>Feedbacks</h2>
                        </div>
                    </div>
                    <div className="row">
                        {refData.map(o =>
                            <div className="col col-fb-width">
                                <div>
                                    <p><b>{o.header}</b></p>
                                    <p><b>{o.contact}</b></p>
                                    <p className="text-fb">{o.text}</p>
                                </div>
                            </div>)}
                    </div>

                    <div className="row row-center">
                        <div className="col">
                            {ref.slice(0, Math.ceil(ref.length / 3)).map(o =>
                                <img className="point point-light" src={point} alt="next" onClick={handleMove} id={o.id}></img>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
