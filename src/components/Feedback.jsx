import React, { Fragment, useState, useEffect } from 'react';
import point from '../img/point.png';
import ref from '../content/reference.json';
import ref2 from '../content/reference/references.json';
// import * as fs from 'fs';
// import listReactFiles from 'list-react-files'

export default function Feedback(props) {
    const [refData, setRefData] = useState(ref.slice(0, 3));

    const handleMove = evt => {
        evt.target.parentNode.childNodes.forEach(e => {
            e.className = "point point-light";
        });
        setRefData(ref.slice(evt.target.id * 3, evt.target.id * 3 + 3));
        evt.target.className = "point";
    }
    // listReactFiles('../content').then(files => console.log(files))
    return (
        <Fragment>
            <main className="container" id="feedback">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>Feedbacks</h2>
                            {/* <h2>7{ref2.text}</h2> */}

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
