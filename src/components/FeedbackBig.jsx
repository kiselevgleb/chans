import React, { Fragment, useState, useEffect } from 'react';

export default function Feedback(props) {
    let text = props.content.text;
    let mas = [];
    for (let index = 0; index < text.length; index = index + 3) {
        mas.push([text[index], text[index + 1], text[index + 2]]);
    }
    return (
        <Fragment>
            <main className="container" id="feedback">
                <div className="wrap block">
                    {mas.map(o =>
                        <div className="row">
                                <div className="col col-fb-width">
                                    <div>
                                        <p><b>{o[0].header}</b></p>
                                        <p><b>{o[0].contact}</b></p>
                                        <p className="text-fb">{o[0].text}</p>
                                    </div>
                                </div>
                                {o[1] === undefined ? <div className="col col-fb-width"></div> : 
                                <div className="col col-fb-width">
                                    <div>
                                        <p><b>{o[1].header}</b></p>
                                        <p><b>{o[1].contact}</b></p>
                                        <p className="text-fb">{o[1].text}</p>
                                    </div>
                                </div>}
                                {o[2] === undefined ? <div className="col col-fb-width"></div> : 
                                <div className="col col-fb-width">
                                    <div>
                                        <p><b>{o[2].header}</b></p>
                                        <p><b>{o[2].contact}</b></p>
                                        <p className="text-fb">{o[2].text}</p>
                                    </div>
                                </div>}
                        </div>)}
                </div>
            </main>
        </Fragment>
    )
}
