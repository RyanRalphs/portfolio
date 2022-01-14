import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import scrollService from '../../../utils/scrollService'

export default function Profile() {
    return (
        <div className="profile-main">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="social-media-bar">
                        <div className="social-media-icons">
                            <a href="https://www.linkedin.com/in/ryan-ralphs-0465a7169/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://github.com/ryanralphs">
                                <i className="fa fa-github-square"></i>
                            </a>
                            <a href="https://twitter.com/ryanjralphs">
                                <i className="fa fa-twitter-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Welcome, I am <span className='highlighted-text'>Ryan</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Father", 1000,
                                        "Mountain Biker", 1000,
                                        "Gamer", 1000,
                                        "Software Engineer", 1000,

                                    ]}
                                />
                            </h1>

                        </span>
                        <span className="profile-role-tagline">
                            and this is my software portfolio (made with <span><a className="highlighted-text" href="https://reactjs.org"> react.js</a></span> and <span><a className="highlighted-text" href="https://nodejs.org"> node.js</a>)</span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => scrollService.scrollHandler.scrollToContact()}>
                            
                            Contact Me
                        </button>
                        <a href="#" download="Ryan-Ralphs.pdf">
                            <button className="btn highlighted-btn">
                                Get CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}