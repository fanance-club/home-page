import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import YoutubeEmbed from "./YoutubeEmbed";

export default class Video extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (

            <section className="video-one" id="video">
                <img src="/assets/images/background/video-one-bg.png" alt="Awesome Image" className="video-one__bg" />
                <div className="container wow fadeInUp" data-wow-duration="1500ms">
                    <div className="video-one__box ">
                        <img src="/assets/images/resources/video-1-1.jpg" alt="" />
                            <div className="video-one__content">
                                {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='xE1i1Cafu5k' onClose={() => this.setState({isOpen: false})} />
                                <div onClick={this.openModal} className="video-popup video-one__btn"><i className="fa fa-play"></i>
                                </div> */}
                                <YoutubeEmbed embedId="xE1i1Cafu5k" />

                                {/* <h2 className="video-one__title">Watch Our <span>Tutorial</span> <br /> Videos. */}
                                {/* </h2> */}
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}