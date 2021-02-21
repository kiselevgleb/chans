import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import ChansTeam from '../img/chans-team.jpg';
import ChansTeam2 from '../img/techcellence.jpg';

export default function Story(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">CHANS's Story</h2>
                            <div className="row story-margin">
                                <div className="col-md-7 ">
                                    <p>The idea for CHANS came from a personal battery dilemma. I, Irina Chulkova and my husband, Sergei Chulkov, had a laptop with a dead battery that we were not able to find an inexpensive and quality replacement for. Sergei decided to try to rebuild the battery on his own. After the first rebuild proved successful, our friends and relatives began asking us to help them rebuild their dead batteries; not just for laptops but for power tools as well. Before long we were getting requests from friends of friends, co-workers and neighbors.</p>
                                    <p>Within a year, in 2004, we established our company, CHANS Battery Rebuild, in St.Petersburg, Russia.</p>
                                    <p>Throughout a 10-year span CHANS became the most well-known and profitable company in the field of battery rebuilding in St. Petersburg Russia. There was much pride in hearing customers say "If CHANS can't fix it, it can't be fixed".</p>
                                </div>
                                <div className="col-md-5">
                                    <img src={ChansTeam} alt="Chans Team"></img>
                                </div>
                            </div>
                            <div className="row story-margin">
                                <div className="col-md-3 ">
                                    <img src={ChansTeam2} alt="Chans Team2"></img>
                                </div>
                                <div className="col-md-9">
                                    <p>After moving to Canada in Fall 2014, we opened the same business in London, Ontario in July 2015 with the great support of Goodwill Industries and London Small Business Centre.</p>
                                    <p>The business continues to be family run. It gives us great happiness to have satisfied customers, to take an active part in preserving our natural environment, and to be active members of our community.</p>
                                </div>
                            </div>
                            {/* <p>The idea for CHANS came from a personal battery dilemma. I, Irina Chulkova and my husband, Sergei Chulkov, had a laptop with a dead battery that we were not able to find an inexpensive and quality replacement for. Sergei decided to try to rebuild the battery on his own. After the first rebuild proved successful, our friends and relatives began asking us to help them rebuild their dead batteries; not just for laptops but for power tools as well. Before long we were getting requests from friends of friends, co-workers and neighbors.</p>
                            <p>Within a year, in 2004, we established our company, CHANS Battery Rebuild, in St.Petersburg, Russia.</p>
                            <p>Throughout a 10-year span CHANS became the most well-known and profitable company in the field of battery rebuilding in St. Petersburg Russia. There was much pride in hearing customers say "If CHANS can't fix it, it can't be fixed".</p>
                            <img src={ChansTeam} alt="Chans Team"></img>
                            <img src={ChansTeam2} alt="Chans Team2"></img>
                            <p>After moving to Canada in Fall 2014, we opened the same business in London, Ontario in July 2015 with the great support of Goodwill Industries and London Small Business Centre.</p>
                            <p>The business continues to be family run. It gives us great happiness to have satisfied customers, to take an active part in preserving our natural environment, and to be active members of our community.</p>
                             */}
                            <div className="row story-margin">
                                <div className="col-md-6 ">
                                    {/* <img src={ChansTeam2} alt="Chans Team2"></img> */}
                                </div>
                                <div className="col-md-6">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CjwbTv5CmqY" frameborder="0" allowfullscreen=""></iframe>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
