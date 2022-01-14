import React, { useState } from 'react'
import { totalScreens, getScreenIndex } from '../../../utils/common'
import scrollService from '../../../utils/scrollService'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)

    const updateScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) {
            return
        }
        let screenIndex = getScreenIndex(currentScreen.screenInView)
        if (screenIndex < 0) {
            return
        }
    }

    scrollService.currentScreenBroadcast.subscribe(updateScreen)

    const getHeaderOptions = () => {
        return (
            totalScreens.map((screen, i) => (
                <div key={screen.screen_name} className={ getHeaderOptionsClass(i) }
                    onClick={() => switchScreen(i, screen)} >
                    <span>{screen.screen_name}</span>
                </div>         
            ))
        )
    }

    const getHeaderOptionsClass = (index) => {
        let classes = " header-option "
        if (index < totalScreens.length - 1) {
            classes += " header-option-seperator "
        }
        if (selectedScreen === index) {
            classes += " selected-header-option "
        }
        return classes
    }

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name)
        if (!screenComponent) {
            return
        }

        screenComponent.scrollIntoView({ behavior: 'smooth' })
        setSelectedScreen(index)
        setShowHeaderOptions(false)
    }

    return(
        <div>
            <div className='header-main' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                    </div>
                    <div className='header-logo'>
                        <span>🚀 ryanralphs.co.uk</span>
                    </div>
                    <div className={showHeaderOptions ? " header-options show-hamburger-options " : " header-options "}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}