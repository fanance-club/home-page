import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">What can you do with <span>Fanance Club</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-laptop"></i>
                                    <h3><a href="#">Buy, Sell or Trade</a></h3>
                                    <p>Your favourite Sport Player’s Stock just like cryptos in crypto market. The trades are secured by CARDANO BLOCKCHAIN</p>
                                    {/* <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-presentation"></i>
                                    <h3><a href="#">Be a Liquidity Provider</a></h3>
                                    <p>Provide Liquidity to “FANC-ADA” or any “PLAYER- FANC” pool and avail LP Tokens</p>
                                    {/* <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-visualization"></i>
                                    <h3><a href="#">Stake your LP Tokens</a></h3>
                                    <p>Stake your LP Tokens to Farm lucrative APYs and also to get a % of Transaction fee proportionate to your contribution in the pools</p>
                                    {/* <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-target"></i>
                                    <h3><a href="#">Predict and Win</a></h3>
                                    <p>Predict the game outcome and win FANC tokens from game pool</p>
                                    {/* <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;