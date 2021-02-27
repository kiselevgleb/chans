import React, { Fragment } from 'react';
import ref from '../content/main/main.json';
import parse from 'react-render-html'

export default function About(props) {

    return (
        <Fragment>
            <main className="container" id="about">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-inline">
                            <div className="line-ver"></div>
                            <p>
                                {parse(ref.text)}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
