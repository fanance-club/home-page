import React from "react";

const Faq = () => {
	return (
		<section className="faq-one">
			<img
				src="/assets/images/background/faq-one-bg.png"
				alt="Awesome Image"
				className="faq-one__bg"
			/>
			<div className="container">
				<div className="block-title text-center">
					<h2 className="block-title__title" style={{ marginTop: "20px" }}>
						Roadmap
					</h2>
				</div>
				<div className="accrodion-grp faq-accrodion">
					<div className="accrodion active">
						<div className="accrodion-inner">
							<div className="accrodion-title">
								<h4>
									2020
								</h4>
							</div>
							<div className="accrodion-content">
								<div className="inner">
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Idea Conceptualization
                                <br />
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Market Research
								</div>
							</div>
						</div>
					</div>
					<div className="accrodion active">
						<div className="accrodion-inner">
							<div className="accrodion-title">
								<h4>2021</h4>
							</div>
							<div className="accrodion-content">
								<div className="inner">
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Built and tested few key modules in Ethereum Rinkeby Testnet
(Only for Testing purposes)
                                <br />
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Website Launch
                                <br />
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Social Media Launch
                                <br />
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Community Channel Launch
                                <br />
                                <i className="fa fa-check" style={{color:"#ffa065"}}></i> Whitepaper Release
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Private Sale
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Pre Sale Round 1
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Testnet Launch
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Pre Sale Round 2
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Community Sale
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Exchange Listings
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Mainnet Phase 1
								</div>
							</div>
						</div>
					</div>
					<div className="accrodion active">
						<div className="accrodion-inner">
							<div className="accrodion-title">
								<h4>2022</h4>
							</div>
							<div className="accrodion-content">
								<div className="inner">
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Mainnet Phase 2
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Partnerships with Sports Bodies and Players
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Mainnet Phase 3
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Mainnet Phase 4
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Partnerships with Sports Bodies and Players Expansion
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> New Sports / Market Addition ( Selected by Community Voting)
                                <br />
                                <i className="fa fa-square" style={{color:"#ffa065"}}></i> Completely Community-Driven Platform
								</div>
							</div>
						</div>
					</div>
					{/* <div className="accrodion active">
						<div className="accrodion-inner">
							<div className="accrodion-title">
								<h4>
									How to connect with the support to improve app experience
								</h4>
							</div>
							<div className="accrodion-content">
								<div className="inner">
									<p>
										There are many variations of passages of available but
										majority have alteration in some by inject humour or random
										words. Lorem ipsum dolor sit amet, error insolens reprimique
										no quo, ea pri verterem phaedr vel ea iisque aliquam.
									</p>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};
export default Faq;
