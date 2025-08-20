'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { AboutCard } from './AboutCard'
import { BackgroundGrid } from '../BackgroundGrid'
import { Box } from '../Box'
import { H2 } from '../Typography/H2'
import { motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
    aboutContainerVariants,
    aboutSlideLeft,
    aboutSlideUp,
} from '../animations/variantsConfig'
import { aboutSectionCards } from '@/cms/fallbackContent'
import { P } from '../Typography/P'
import { AboutInfographic } from './AboutInfographic'
import { H3 } from '../Typography/H3'

const MotionFlexContainer = motion(FlexContainer)
const MotionBox = motion(Box)
const MotionP = motion(P)

type AboutProps = {
    cardsData: Array<{
        index: string
        title: string
        description: string
        company: string
        website: string
    }>
}

export const About = ({ cardsData }: AboutProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <MotionFlexContainer
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
            id="about"
            width="w-full md:max-w-[1920px]"
            gap="gap-10"
            direction="flex-col"
            className="overflow-hidden"
        >
            <Box className="px-5 pt-24 md:pt-36 pb-16 md:pb-20">
                <MotionFlexContainer
                    variants={aboutContainerVariants}
                    direction="flex-col"
                    gap="gap-5"
                    center
                    className="overflow-hidden"
                >
                    <H2 className="capitalize flex text-center overflow-hidden">
                        <span className="overflow-hidden block">
                            <motion.span
                                variants={aboutSlideUp}
                                className="inline-block"
                            >
                                The TL;DR on DoD Certs and Docs
                            </motion.span>
                        </span>
                    </H2>
                    <span className="overflow-hidden block">
                        <MotionP
                            variants={aboutSlideUp}
                            className="max-w-lg text-center"
                        >
                            Start here to get your bearings. Then dive into the
                            official docs (snacks recommended).
                        </MotionP>
                    </span>
                    <AboutInfographic />
                </MotionFlexContainer>
            </Box>

            <MotionBox
                variants={aboutSlideLeft}
                className="px-5 md:pb-[60px] -mt-[54px] md:-mt-15"
            >
                <FlexContainer
                    justifyContent="justify-between"
                    alignItems="items-center"
                    className="py-5"
                >
                    <H3>Subheading</H3>
                    <FlexContainer width="w-auto" className="flex h-11 gap-12">
                        <button className="swiper-button-prev" />
                        <button className="swiper-button-next" />
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer className="items-stretch">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop
                        speed={700}
                        autoplay={{
                            delay: 3000,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                    >
                        {cardsData.map((card) => (
                            <SwiperSlide key={card.index} className="h-full">
                                <AboutCard
                                    index={card.index}
                                    title={card.title}
                                    company={card.company}
                                    website={card.website}
                                    description={card.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FlexContainer>
            </MotionBox>
        </MotionFlexContainer>
    )
}
