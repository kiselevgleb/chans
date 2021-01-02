import React, { Fragment } from 'react';

export default function About(props) {

    return (
        <Fragment>
            <main className="container" id="about">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            {/* <h2>Which Do You Prefer?</h2> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-inline">
                            <div className="line-ver"></div>
                            <p>
                                Think buying a new electronic is better quality than repairing your current one? Think again.
                                <br></br>
                                <br></br>
                                Our company - CHANS Battery Rebuild- has been repairing batteries since 2004 using the highest quality materials. As such, your rebuilt battery will outperform and outlast newly replacement batteries. We replace every cell in the battery, so it is as though we a placing a brand new battery into your current electronic.
                                <br></br>
                                <br></br>
                                <h3>Do you know where your dead electronics go?</h3>
                               
                                When a battery dies on a laptop or power tool, you might throw out the old battery and buy a new one. Sometimes, you will buy a new device all together. But, whether you throw away the battery or the whole device, you don't think that you are endangering our health and contaminating the Earth for centuries to come. You are!
                                <br></br>
                                <br></br>
                                Instead of having to buy a new electronic, let us repair the battery in your current one.
                                By doing this, <b>YOU save</b> the planet from the plastic waste and the harmful elements in it.

                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
