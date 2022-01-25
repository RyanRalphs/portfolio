import React from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/scrollService'
import animations from '../../utils/animations'
import "./About.css"


export default function About(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== screen)
        {
            return
        }
        animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const screenConstants = {
        description: "Hi! I'm Ryan. I am a proud father, reckless mountain biker, competitive gamer and a keen software engineer. While I absolutely love being behind a screen creating software, I am happiest when spending time with my children and partner, competing in online games or when up a mountain with my bike and my friends.",
        highlights: {
            bullets: [
                "Father of 4, 3 daughters and a son",
                "Partner to Jess, my biggest supporter",
                "I absolutely love Grime, Dub and Drum and Bass music",
                "I play MMO's, FPS/TPS online and MOBAs",
                "My favourite software framework is node.js",
                "I live in the West Midlands",
                "I love keeping fit outside of mountain biking",
            ],
            heading: "The long and short of it"
        }
    }

    const renderHighlights = () => {
        return(screenConstants.highlights.bullets.map((value, i) => (
            <div className='highlight' key={i}>
                <div className='highlight-blob'></div>
                    <span>{value}</span>
            </div>
        )))
    }
    return (
        <div className='about-main screen-container' id={props.id}>
            <div className='about-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Every Developer has a life outside of code... Right?'}/>
                    <div className='about-card'>
                        <div className='about-profile'></div>
                        <div className='about-details'>
                            <span className='about-description'>{screenConstants.description}</span>
                            <div className='about-highlights'>
                                <div className='highlight-heading'>

                                    <span>{screenConstants.highlights.heading}</span>
                                </div>
                                {renderHighlights()}
                            </div>
                            <div className='about-options'>
                            <button className='btn primary-btn'> Contact Me
                        </button>
                        <a href="#" download="Ryan-Ralphs.pdf">
                            <button className="btn highlighted-btn">
                                Get CV
                            </button>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}