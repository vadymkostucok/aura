'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographyButton } from '../Typography/TypographyButton'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { PodcastCard } from './PodcastCard'

import Chip from '@/assets/Chip.json'
import singleArrow from '@/assets/singleArrow.json'
import { LottieAnimation } from '../LottieAnimation'
import { motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import {
    podcastCardContainerVariants,
    podcastContainerVariants,
    podcastOpacitySlideUp,
    podcastSlideUp,
} from '../animations/variantsConfig'
import {
    podcastSectionEventsCards,
    podcastSectionNewsCards,
} from '@/cms/fallbackContent'
import { Box } from '../Box'
import { H3 } from '../Typography/H3'

const MotionFlexContainer = motion(FlexContainer)
const MotionBox = motion(Box)
const MotionH2 = motion(H2)
const MotionH3 = motion(H3)
const MotionP = motion(P)

type PodcastProps = {
    newsData: Array<{ date: string; title: string }>
    eventsData: Array<{ date: string; title: string }>
}

export const Podcast = ({ newsData, eventsData }: PodcastProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <FlexContainer center className="pt-24 lg:pt-36 px-5">
            <MotionFlexContainer
                ref={ref}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
                width="w-4xl"
                direction="flex-col"
                gap="gap-12"
            >
                <MotionBox>
                    <MotionH2
                        variants={podcastContainerVariants}
                        fontSize="text-5xl"
                        className="flex flex-wrap gap-3 overflow-hidden justify-center pb-5"
                    >
                        {['Weekly', 'brief'].map((word, i) => (
                            <span key={i} className="overflow-hidden block">
                                <motion.span
                                    variants={podcastSlideUp}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </MotionH2>
                    <MotionBox
                        variants={podcastContainerVariants}
                        className="overflow-hidden"
                    >
                        <MotionP
                            variants={podcastSlideUp}
                            className="text-center"
                        >
                            Headlines, events, and memes worth your time this
                            week.
                        </MotionP>
                    </MotionBox>
                </MotionBox>
                <MotionFlexContainer
                    variants={podcastCardContainerVariants}
                    direction="flex-col"
                    gap="gap-4"
                >
                    <MotionBox>
                        <MotionH3 variants={podcastOpacitySlideUp}>
                            News
                        </MotionH3>
                        {newsData.map((card, index) => (
                            <PodcastCard
                                key={index}
                                date={card.date}
                                title={card.title}
                            />
                        ))}
                    </MotionBox>

                    <MotionBox>
                        <MotionH3 variants={podcastOpacitySlideUp}>
                            Events
                        </MotionH3>
                        {eventsData.map((card, index) => (
                            <PodcastCard
                                key={index}
                                date={card.date}
                                title={card.title}
                            />
                        ))}
                    </MotionBox>
                    <MotionBox
                        className="lg:mt-[32px]"
                        variants={podcastCardContainerVariants}
                    >
                        <MotionH3 variants={podcastOpacitySlideUp}>
                            Laughs
                        </MotionH3>

                        <MotionFlexContainer
                            variants={podcastOpacitySlideUp}
                            direction="flex-col"
                            gap="gap-6"
                            center
                            className="lg:border lg:border-[#ffffff10] md:bg-[#ffffff02] backdrop-blur-lg rounded-[2px]"
                        >
                            <FlexContainer center className="h-full pt-10 pb-5">
                                <LottieAnimation
                                    animationData={Chip}
                                    className="w-24 lg:w-36"
                                />
                            </FlexContainer>
                            <FlexContainer
                                direction="flex-col"
                                center
                                gap="gap-6"
                                className="lg:border-t border-[#ffffff10] h-full lg:p-11"
                            >
                                <P className="text-center">Meme of the week</P>
                                <button className="uppercase cursor-pointer text-[#FFF973]">
                                    <FlexContainer gap="gap-2.5">
                                        <TypographyButton>
                                            learn_more
                                        </TypographyButton>
                                        <LottieAnimation
                                            animationData={singleArrow}
                                            className="w-5"
                                        />
                                    </FlexContainer>
                                </button>
                            </FlexContainer>
                        </MotionFlexContainer>
                    </MotionBox>
                </MotionFlexContainer>
            </MotionFlexContainer>
        </FlexContainer>
    )
}
