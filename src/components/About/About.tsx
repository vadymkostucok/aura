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
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
    aboutContainerVariants,
    aboutSlideLeft,
    aboutSlideUp,
} from '../animations/variantsConfig'
import { aboutSectionCards } from '@/cms/fallbackContent'

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)

export const About = () => {
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
            direction="flex-col"
            className="overflow-hidden"
        >
            <Box className="px-5 pt-24 md:pt-36 pb-16 md:pb-20">
                <BackgroundGrid />
                <FlexContainer center className="overflow-hidden">
                    <MotionH2
                        variants={aboutContainerVariants}
                        className="capitalize flex flex-wrap gap-2 overflow-hidden"
                    >
                        <span className="overflow-hidden block">
                            <motion.span
                                variants={aboutSlideUp}
                                className="inline-block"
                            >
                                Don’t worry.
                            </motion.span>
                        </span>
                        <span className="overflow-hidden block">
                            <motion.span
                                variants={aboutSlideUp}
                                className="inline-block text-[#21D7A6]"
                            >
                                we got you.
                            </motion.span>
                        </span>
                    </MotionH2>
                </FlexContainer>
            </Box>

            <MotionFlexContainer
                variants={aboutSlideLeft}
                className="px-5 md:pb-[60px] items-stretch -mt-7 md:-mt-8"
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop
                    speed={700}
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {aboutSectionCards.map((card) => (
                        <SwiperSlide key={card.index} className="h-full">
                            <AboutCard
                                index={card.index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MotionFlexContainer>
        </MotionFlexContainer>
    )
}
