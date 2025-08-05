import { easeOut } from 'framer-motion'

// INTRO
export const introFadeInUp = {
    hidden: { y: 30 },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut,
            delay: 0.4,
        },
    },
}

export const introSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
            delay: 0.4,
        },
    },
}

export const introOpacity = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.9, ease: easeOut, delay: 1 },
    },
}

// ABOUT
export const aboutContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
            delay: 1,
        },
    },
}

export const aboutSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

// PODCAST
export const podcastContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delay: 1,
        },
    },
}

export const podcastSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

export const podcastOpacitySlideUp = {
    hidden: { y: '50%', opacity: 0 },
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

export const podcastCardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delay: 1,
        },
    },
}

export const podcastCardSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

// REPORT
export const reportContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delay: 1,
        },
    },
}

export const reportSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

export const reportGrowY = {
    hidden: { scaleY: 0.25, opacity: 0 },
    visible: {
        scaleY: 1,
        opacity: 1,
        transition: {
            scaleY: {
                duration: 0.6,
                ease: easeOut,
            },
            opacity: {
                duration: 0.3,
                ease: 'easeOut',
            },
            delay: 0.5,
        },
    },
}

// LIBRARIES
export const librariesContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delay: 1,
        },
    },
}

export const librariesSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

export const librariesCardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delay: 1,
        },
    },
}

export const libraryCardSlideUp = {
    hidden: { y: '25%', opacity: 0.25 },
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: easeOut,
        },
    },
}

// PROGRAMS

export const programsContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delay: 1,
        },
    },
}

export const programsSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

export const programsCardSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
            delay: 0.1,
        },
    },
}

// CONTACT

export const contactContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delay: 1,
        },
    },
}

export const contactSlideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

export const contactSlideUpOpacity = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}
