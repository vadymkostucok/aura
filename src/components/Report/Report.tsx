'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3, TypographySmall } from '../Typography/Typography'

import Blocks from '@/assets/Blocks.json'
import logo3D from '@/assets/3DLogo.json'
import { LottieAnimation } from '../LottieAnimation'
import { H2 } from '../Typography/H2'
import { easeOut, motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import { Box } from '../Box'

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

const growY = {
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

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)

export const Report = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <MotionFlexContainer
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
            width="w-full max-w-[1920px]"
            direction="flex-col lg:flex-row"
            gap="gap-10 2xl:gap-36"
            className="pt-24 lg:pt-36 px-5"
        >
            <Box className="2xl:w-[550px] h-fit overflow-hidden 2xl:shrink-0">
                <MotionH2
                    variants={containerVariants}
                    className="md:pt-12 flex flex-wrap gap-3"
                >
                    {['Breaches', 'Report'].map((word, i) => (
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
            </Box>
            <MotionFlexContainer variants={growY} direction="flex-col" center>
                <FlexContainer
                    width="w-fit"
                    className="px-10 py-1.5 clip-panel-label-both bg-[#FFFFFF0D] backdrop-blur-lg"
                    gap="gap-5"
                    center
                >
                    <LottieAnimation
                        animationData={Blocks}
                        className="h-2.5 opacity-20"
                    />
                    <TypographySmall className="opacity-60 uppercase">
                        Breach / cyber danger reports
                    </TypographySmall>
                    <LottieAnimation
                        animationData={Blocks}
                        className="h-2.5 opacity-20 rotate-180"
                    />
                </FlexContainer>
                <FlexContainer
                    gap="gap-5 lg:gap-10"
                    className="py-20 md:py-40 bg-[#11000005] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg text-[#FFF973] uppercase"
                    center
                >
                    <H3 fontSize="text-[26px]">Coming</H3>
                    <LottieAnimation animationData={logo3D} />
                    <H3 fontSize="text-[26px]">Soon...</H3>
                </FlexContainer>
            </MotionFlexContainer>
        </MotionFlexContainer>
    )
}
