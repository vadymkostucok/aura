'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographyDisclaimer } from '../Typography/Typography'
import { TypographyButton } from '../Typography/TypographyButton'
import { P } from '../Typography/P'
import { H1 } from '../Typography/H1'
import { Box } from '../Box'
import { BackgroundGrid } from '../BackgroundGrid'
import { LottieAnimation } from '../LottieAnimation'
import { easeOut, motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'

import ArrowsCTA from '@/assets/ArrowsCTA.json'
import ArrowsCTAYellow from '@/assets/ArrowsCTAYellow.json'

const fadeInUp = {
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

const slideUp = {
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

const opacity = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.9, ease: easeOut, delay: 1 },
    },
}

const MotionP = motion(P)
const MotionH1 = motion(H1)
const MotionBox = motion(Box)

export const Intro = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <MotionBox
            ref={ref}
            id="intro"
            className="overflow-hidden w-full"
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
        >
            <BackgroundGrid />
            <FlexContainer direction="flex-col" minHeight="min-h-screen" center>
                <div className="overflow-hidden">
                    <MotionP
                        variants={slideUp}
                        fontSize="text-[13px]"
                        className="w-[280px] md:w-auto text-center uppercase text-[#FFF973] opacity-100"
                    >
                        Illuminate your path to cybersecurity mastery
                    </MotionP>
                </div>
                <MotionH1 variants={fadeInUp} className="relative uppercase">
                    Aura
                </MotionH1>
                <Box className="w-[330px] md:w-auto">
                    <div className="overflow-hidden">
                        <MotionP
                            variants={slideUp}
                            className="text-center opacity-80"
                        >
                            The cybersecurity world is daunting.
                        </MotionP>
                    </div>
                    <div className="overflow-hidden">
                        <MotionP
                            variants={slideUp}
                            className="text-center opacity-80"
                        >
                            We’ll guide you through it, no matter your skill
                            level.
                        </MotionP>
                    </div>
                </Box>
                <motion.div
                    variants={opacity}
                    className="hidden md:block absolute bottom-0 left-0 w-full p-5"
                >
                    <FlexContainer justifyContent="justify-between">
                        <TypographyDisclaimer>
                            ©2025_aura security
                        </TypographyDisclaimer>
                        <TypographyDisclaimer>
                            [Scroll to discover]
                        </TypographyDisclaimer>
                    </FlexContainer>
                </motion.div>
                <motion.div
                    variants={opacity}
                    className="group absolute bottom-20 md:bottom-16 left-1/2 -translate-x-1/2"
                >
                    <LottieAnimation
                        animationData={ArrowsCTA}
                        className="pointer-events-none group-hover:hidden block md:h-32 w-44 md:w-64 absolute left-1/2 -translate-x-1/2 -bottom-7.5 md:-bottom-[49px]"
                    />
                    <LottieAnimation
                        animationData={ArrowsCTAYellow}
                        className="pointer-events-none group-hover:block hidden md:h-32 w-44 md:w-64 absolute left-1/2 -translate-x-1/2 -bottom-7.5 md:-bottom-[49px]"
                    />
                    <button
                        className="group-hover:text-[#FFF973] cursor-pointer duration-500"
                        onClick={() => {
                            const section = document.getElementById('about')
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}
                    >
                        <TypographyButton fontSize="text-sm md:text-lg">
                            Learn More
                        </TypographyButton>
                    </button>
                </motion.div>
            </FlexContainer>
        </MotionBox>
    )
}
