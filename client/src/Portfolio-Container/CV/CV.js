import React, { useState } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/scrollService";
import animations from "../../utils/animations";
import "./CV.css"

export default function CV(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== screen) {
            return
        }
        animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const CVHeading = (props) => {
        return (
            <div className="cv-heading">
                <div className="cv-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="cv-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className="cv-heading-description">
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    }

    const cvBullets = [
        { label: "Current Role", logo: "current.svg" },
        { label: "Previous Roles", logo: "previous-roles.svg" },
        { label: "Key Languages", logo: "key-langs.svg" },
        { label: "Current Tech Obsessions", logo: "tech.svg" },
        { label: "Live Demos", logo: "demos.svg" }
    ]

    const programmingSkillDetails = [
        { skill: "JavaScript", ratingPercentage: 70 },
        { skill: "Node.js", ratingPercentage: 80 },
        { skill: "React.js", ratingPercentage: 60 },
        { skill: "Express.js", ratingPercentage: 80 },
        { skill: "Laravel", ratingPercentage: 80 },
        { skill: "PHP", ratingPercentage: 85 },
        { skill: "noSQL", ratingPercentage: 75 },
        { skill: "MySQL", ratingPercentage: 80 },
        { skill: "Socket.io", ratingPercentage: 80 },
        { skill: "Typescript", ratingPercentage: 60 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 75 },
    ]

    const CVDetails = [

        <div className="cv-screen-container" key="work-history">
            <CVHeading heading={"CityFibre"} subHeading={"Software Developer in Test"} fromDate={"Jul 2019"} toDate={"Present"} />
            <div className="history-description"><span class="cv-description-text">
                Unit and Feature testing of PHP / JavaScript code on various different frameworks including Laravel, PHPCake and Vue
                <br />
                <br />

                Behat / Automation of all User Interface features in Gherkin / Cucumber format
                <br />
                <br />

                Tooling for QA team including packages to aid with testing, docker environment set ups and extra oversight for guiding Junior developers and testers into correctly delivering features and safe code.
            </span>
            </div>
        </div>,


        <div className="cv-screen-container" key="work-past">
            <CVHeading heading={"CityFibre"} subHeading={"Junior Software Developer in Test"} fromDate={"Jan 2019"} toDate={"Jul 2019"} />
            <CVHeading heading={"CityFibre"} subHeading={"Junior Software Developer"} fromDate={"Aug 2018"} toDate={"Jan 2019"} />
            <CVHeading heading={"CityFibre"} subHeading={"QA Analyst"} fromDate={"Sept 2017"} toDate={"Aug 2018"} />



        </div>,
        <div className="cv-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                </div>
            ))}
        </div>,

        <div className="cv-screen-container" key="interests">
            <CVHeading heading="The Testing Pyramid" description="I love the idea of each technical member of a team being able to contribute to one recognised goal; to deliver quality. Tests matter!" />
            <CVHeading heading="Design Patterns" description="Since getting into JavaScript a lot more (especially on the back end), I have developed a very keen interest in design patterns and always have my head in a book when I get the chance!" />
            <CVHeading heading="Microservices" description="After being exposed to Microservices around 3 years ago, I fell in love with the fast paced, agile and scalable style of Microservices." />
        </div>,

        <div className="cv-screen-container" key="live-demos">
             <CVHeading heading="Weather App" description="https://github.com/RyanRalphs/weather-app" />
            <CVHeading heading="Task API" description="https://github.com/RyanRalphs/task-rest-api" />
            <CVHeading heading="Notes CLI App" description="https://github.com/RyanRalphs/cli-notes-app" />



        </div>,
    ]

    const handleCarousel = (index) => {
        let offsetHeight = 360
        let newCarouselOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        }
        setCarouselOffsetStyle(newCarouselOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets = () => {
        return cvBullets.map((bullet, index) => (
            <div onClick={() => handleCarousel(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className="bullet-logo" src={require(`../../assets/CV/${bullet.logo}`)} alt="Ooops!" />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getCVScreen = () => {
        return (
            <div style={carouselOffsetStyle.style} className="cv-details-carousel">
                {CVDetails.map((CVDetail) => CVDetail)}
            </div>
        )
    }


    return (
        <div className="cv-main screen-container" id={props.id || ""}>
            <div className="cv-content">
                <ScreenHeading title={"Professional"} subHeading={"A more formal insight"} />
                <div className="cv-card">
                    <div className="cv-bullets">
                        <div className="bullets-container">
                            <div className="bullet-icons"> </div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="cv-bullet-details">{getCVScreen()}</div>
                </div>
            </div>
        </div>
    )
}