'use client'
import React, { useRef, useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { P } from '../Typography/P'
import { H2 } from '../Typography/H2'
import { Box } from '../Box'

import { Instagram } from '../svg/Instagram'
import { Github } from '../svg/Github'
import { X } from '../svg/X'
import { Youtube } from '../svg/Youtube'
import { ContactForm } from './ContactForm'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import successIcon from '@/assets/successIcon.svg'
import Image from 'next/image'
import {
    contactContainerVariants,
    contactSlideUp,
    contactSlideUpOpacity,
} from '../animations/variantsConfig'

const socialMediaMap = [
    { logo: <Instagram /> },
    { logo: <Github /> },
    { logo: <X /> },
    { logo: <Youtube /> },
]

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)
const MotionP = motion(P)

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <>
            <FlexContainer
                minHeight="min-h-screen"
                className="pt-24 md:pt-64 pb-24 md:pb-48 px-5 md:min-h-auto"
                center
            >
                <MotionFlexContainer
                    ref={ref}
                    initial="hidden"
                    animate={shouldAnimate ? 'visible' : 'hidden'}
                    direction="flex-col"
                    justifyContent="justify-center"
                    gap="gap-5"
                >
                    <FlexContainer direction="flex-col" gap="gap-5" center>
                        <MotionH2
                            variants={contactContainerVariants}
                            className="flex flex-wrap justify-center gap-x-2"
                        >
                            {['Join', 'our'].map((word, i) => (
                                <span key={i} className="overflow-hidden block">
                                    <motion.span
                                        variants={contactSlideUp}
                                        className="inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                            <br className="w-full" />
                            <span className="overflow-hidden block">
                                <motion.span
                                    variants={contactSlideUp}
                                    className="inline-block text-[#21D7A6]"
                                >
                                    mailing list
                                </motion.span>
                            </span>
                        </MotionH2>
                        <span className="overflow-hidden">
                            <MotionP
                                variants={contactSlideUp}
                                className="inline-block text-center"
                            >
                                {
                                    "Get exclusive access to live webinars, expert Q&A's, and other invite-only events."
                                }
                            </MotionP>
                        </span>
                    </FlexContainer>
                    <MotionFlexContainer
                        direction="flex-col"
                        gap="gap-5"
                        width="w-full"
                        center
                    >
                        <ContactForm
                            onSubmitSuccess={() => {
                                setIsSubmitted(true)
                                setTimeout(() => setIsSubmitted(false), 5000) // auto-hide after 5s
                            }}
                        />
                        {isSubmitted && (
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex gap-2 text-[11px] lg:text-[14px] text-[#21D7A6] uppercase px-5 items-center"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 5,
                                                ease: 'linear',
                                            }}
                                        >
                                            <Image
                                                src={successIcon}
                                                alt="Success Icon"
                                                className="w-4 h-4"
                                            />
                                        </motion.div>
                                        Your application has been successfully
                                        submitted.
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        )}
                    </MotionFlexContainer>
                </MotionFlexContainer>
            </FlexContainer>
            <MotionFlexContainer
                gap="gap-1"
                variants={contactSlideUpOpacity}
                className="overflow-hidden px-4 pb-2.5"
            >
                {socialMediaMap.map((media, index) => (
                    <Box
                        key={index}
                        className="group fade-border rounded-full p-4 flex cursor-pointer items-center duration-500 hover:border-[#fff973]"
                    >
                        {media.logo}
                    </Box>
                ))}
            </MotionFlexContainer>
        </>
    )
}
