'use client'
import React, { useRef } from 'react'
import { H2 } from '../Typography/H2'
import { FlexContainer } from '../FlexContainer'
import { LibraryCard } from './LibraryCard'

import cam from '@/assets/cam.svg'
import link from '@/assets/link.svg'
import save from '@/assets/save.svg'
import check from '@/assets/checkAlt.svg'
import { easeOut, motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'

const mapConfig = [
    { description: 'Cybersecurity 101', type: 'video', icon: cam },
    {
        description: 'Cybersecurity for new Vibe Coders',
        type: 'video',
        icon: cam,
    },
    { description: 'Viber Coder Security', type: 'checklist', icon: check },
    {
        description: 'Prompts to ensure your code is secure',
        type: 'pdf document',
        icon: save,
    },
    {
        description: 'Security libraries for Vibe Coders',
        type: 'links',
        icon: link,
    },
    {
        description: 'Intro to Compliance for Vibe Coders',
        type: 'video',
        icon: cam,
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delay: 1,
        },
    },
}

const slideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

const cardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delay: 1,
        },
    },
}

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)

export const Libraries = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <FlexContainer className="pt-24 md:pt-36 px-5" center>
            <MotionFlexContainer
                ref={ref}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
                width="w-full max-w-[1200px]"
                direction="flex-col"
                gap="gap-10"
                center
            >
                <MotionH2
                    variants={containerVariants}
                    fontSize="text-5xl"
                    className="flex flex-wrap gap-3 overflow-hidden justify-center"
                >
                    {['Library', 'for', 'Vibe', 'Coders'].map((word, i) => (
                        <span key={i} className="overflow-hidden block">
                            <motion.span
                                variants={slideUp}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </MotionH2>
                <motion.div
                    variants={cardContainerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                    {mapConfig.map((card, index) => (
                        <LibraryCard
                            key={index}
                            type={card.type}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))}
                </motion.div>
            </MotionFlexContainer>
        </FlexContainer>
    )
}
