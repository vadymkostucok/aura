'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { P } from '../Typography/P'
import { H2 } from '../Typography/H2'
import { Box } from '../Box'

import { Instagram } from '../svg/Instagram'
import { Github } from '../svg/Github'
import { X } from '../svg/X'
import { Youtube } from '../svg/Youtube'
import { ContactForm } from './ContactForm'
import { easeOut, motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'

const socialMediaMap = [
    { logo: <Instagram /> },
    { logo: <Github /> },
    { logo: <X /> },
    { logo: <Youtube /> },
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

const slideUpOpacity = {
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

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)
const MotionP = motion(P)

export const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <FlexContainer className="pt-24 md:pt-36 pb-24 md:pb-48 px-5" center>
            <MotionFlexContainer
                ref={ref}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
                direction="flex-col lg:flex-row"
                justifyContent="justify-center"
                gap="gap-10 2xl:gap-32"
            >
                <FlexContainer
                    width="w-full lg:w-1/2"
                    direction="flex-col"
                    alignItems="items-end"
                    justifyContent="justify-between"
                >
                    <FlexContainer
                        width="lg:w-[420px]"
                        direction="flex-col"
                        gap="gap-5 md:gap-10"
                    >
                        <MotionH2
                            variants={containerVariants}
                            className="flex flex-wrap gap-x-2"
                        >
                            {['Join', 'Our'].map((word, i) => (
                                <span key={i} className="overflow-hidden block">
                                    <motion.span
                                        variants={slideUp}
                                        className="inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                            <br className="w-full" />
                            <span className="overflow-hidden block">
                                <motion.span
                                    variants={slideUp}
                                    className="inline-block text-[#21D7A6]"
                                >
                                    Community
                                </motion.span>
                            </span>
                        </MotionH2>
                        <span className="overflow-hidden block">
                            <MotionP
                                variants={slideUp}
                                className="inline-block"
                            >
                                Get exclusive access to our live webcasts,
                                special events, messaging group, security
                                experts, and more.
                            </MotionP>
                        </span>
                    </FlexContainer>
                    <FlexContainer
                        width="lg:w-[420px]"
                        direction="flex-col"
                        gap="gap-5"
                        className="hidden lg:flex pb-8"
                    >
                        <span className="overflow-hidden block">
                            <motion.h5
                                variants={slideUp}
                                className="tracking-tight"
                            >
                                Social links:
                            </motion.h5>
                        </span>
                        <MotionFlexContainer
                            variants={slideUpOpacity}
                            gap="gap-1"
                            className="overflow-hidden"
                        >
                            {socialMediaMap.map((media, index) => (
                                <Box
                                    key={index}
                                    className="group fade-border rounded-full p-4 flex items-center duration-500 hover:border-[#fff973]"
                                >
                                    {media.logo}
                                </Box>
                            ))}
                        </MotionFlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <MotionFlexContainer width="w-full lg:w-1/2 overflow-hidden">
                    <ContactForm />
                </MotionFlexContainer>

                <MotionFlexContainer
                    gap="gap-1"
                    variants={slideUpOpacity}
                    justifyContent="justify-center"
                    className="overflow-hidden flex lg:hidden pb-8"
                >
                    {socialMediaMap.map((media, index) => (
                        <Box
                            key={index}
                            className="group fade-border rounded-full p-4 flex items-center duration-500 hover:border-[#fff973]"
                        >
                            {media.logo}
                        </Box>
                    ))}
                </MotionFlexContainer>
            </MotionFlexContainer>
        </FlexContainer>
    )
}
