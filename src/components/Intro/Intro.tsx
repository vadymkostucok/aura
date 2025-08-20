'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographyButton } from '../Typography/TypographyButton'
import { P } from '../Typography/P'
import { Box } from '../Box'
import { BackgroundGrid } from '../BackgroundGrid'
import { LottieAnimation } from '../LottieAnimation'
import { motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import ArrowsCTA from '@/assets/ArrowsCTA.json'
import ArrowsCTAYellow from '@/assets/ArrowsCTAYellow.json'
import {
    introContainerVariants,
    introFadeInUp,
    introOpacity,
    introSlideUp,
} from '../animations/variantsConfig'
import { H1 } from '../Typography/H1'

const MotionP = motion(P)
const MotionH1 = motion(H1)
const MotionBox = motion(Box)

export const Intro = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
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
            <FlexContainer
                direction="flex-col"
                minHeight="min-h-screen"
                gap="gap-5"
                center
            >
                <MotionH1
                    variants={introContainerVariants}
                    className="flex flex-wrap justify-center gap-3 md:max-w-[1100px]"
                >
                    {[
                        'Building',
                        'DoD',
                        'cloud',
                        'or',
                        'edge',
                        'software?',
                    ].map((word, i) => (
                        <span key={i} className="overflow-hidden block">
                            <motion.span
                                variants={introFadeInUp}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                    <br />
                    {['Skip', 'the', 'overwhelm'].map((word, i) => (
                        <span key={i} className="overflow-hidden block">
                            <motion.span
                                variants={introFadeInUp}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </MotionH1>
                <Box className="w-full md:w-[450px]">
                    <div className="overflow-hidden">
                        <MotionP
                            variants={introSlideUp}
                            className="text-center opacity-80"
                        >
                            Our curated, tech-focused resources help you ship
                            fast, stay secure, and be compliant
                        </MotionP>
                    </div>
                </Box>
                <motion.div
                    variants={introOpacity}
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
