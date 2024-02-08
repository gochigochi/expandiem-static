export const fadeIn = {
    initial: {
        opacity: 0,
        scale: .95,
    },
    appear: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.85, 0.18, 0.1, 0.79],
            duration: .3,
            delay: .4
        }
    }
}

export const slideIn = {
    initial: {
        opacity: 0,
        y: 10,
    },
    appear: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.85, 0.18, 0.1, 0.79],
            duration: .7,
            delay: .2,
        }
    }
}