export default class animations {
    static animations = new animations()

    fadeInScreen = (screen_name) => {
        let screen = document.getElementById(screen_name)

        if(!screen || !screen_name) {
            return
        }
        screen.style.opacity = "5"
        screen.style.transform = "translateY(1px)"
    }
}