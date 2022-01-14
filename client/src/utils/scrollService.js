import { totalScreens } from "./common"
import { Subject } from "rxjs"

export default class scrollService {
    static scrollHandler = new scrollService()

    static currentScreenBroadcast = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreen)
    }
    scrollToContact = () => {
        let contactMeScreen = document.getElementById('Contact')
        if (!contactMeScreen) {
            return;
        }
        contactMeScreen.scrollIntoView({ behavior: "smooth" })
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById('Home')
        if (!homeScreen) {
            return;
        }
        homeScreen.scrollIntoView({ behavior: "smooth" })
    }
    elementIsViewable = (elem, type) => {
        let elementPosition = elem.getBoundingClientRect()
        let elementTop = elementPosition.top;
        let elementBottom = elementPosition.bottom

        let isPartiallyVisible = elementTop < window.innerHeight && elementBottom >= 0
        let isVisible = elementTop >= 0 && elementBottom <= window.innerHeight

        switch (type) {
            case "partial":
                return isPartiallyVisible

            case "complete":
                return isVisible
            default:
                return false
        }
    }

    checkCurrentScreenOnView = (event) => {
        if (!event || Object.keys(event).length < 1) {
            return;
        }
        for (let screen of totalScreens) {
            let screenFromDOM = document.getElementById(screen.screen_name)
            if (!screenFromDOM) {
                continue
            }
            let visible = this.elementIsViewable(screenFromDOM, "complete")
            let partiallyVisible = this.elementIsViewable(screenFromDOM, "partial")

            if (visible || partiallyVisible) {
                if (visible && !screen.alreadyRendered) {
                    scrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    })
                    screen['alreadyRendered'] = true
                    break;
                }
                if (visible) {
                    scrollService.currentScreenBroadcast.next({
                        screenInView: screen.screen_name
                    })
                    break;
                }
            }
        }

    }

}
