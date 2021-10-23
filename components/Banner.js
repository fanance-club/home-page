import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="/assets/images/resources/soccer-hero.png" alt="Awesome Image" width="600" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">Sports Player's <br />
                                    <span>DEX</span>
                                     {/* you <br /> Need. */}
                                     </h3>
                                <p className="banner-one__text">Buy and Sell your Favourite Sports Player’s Stocks
                                </p>
                                <a href="#" className="banner-one__btn thm-btn "><span>REGISTER</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;