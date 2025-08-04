'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { AboutCard } from './AboutCard'
import { BackgroundGrid } from '../BackgroundGrid'
import { Box } from '../Box'
import { H2 } from '../Typography/H2'
import { easeOut, motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import happyEmoji from '@/assets/emoji-happy.svg'
import keyEmoji from '@/assets/key.svg'
import ghostEmoji from '@/assets/ghost.svg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const configMap = [
    {
        index: '01',
        title: 'Vibe Coders...',
        icon: happyEmoji,
        description: [
            'You’re creating code in seconds. You’re also creating security threats in seconds.',
            'Check out the Vibe section in Resources to learn best practices and get free tools to help secure your Vibe code.',
        ],
    },
    {
        index: '02',
        title: 'New to Cybersecurity',
        icon: keyEmoji,
        description: [
            'The cybersecurity world is daunting for just about anyone. We’ll teach you the basics, vocabulary, and provide useful tools in the Beginners section in Resources.',
        ],
    },
    {
        index: '03',
        title: 'Want Fed/DoD customers',
        icon: ghostEmoji,
        description: [
            'So you want to sell your technology to federal agencies and the Department of Defense. We’ll give you tools and information to help guide you through the cybersecurity requirements.',
        ],
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
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

const MotionBox = motion(Box)
const MotionH2 = motion(H2)

export const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-200px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <FlexContainer
            width="w-full md:max-w-[1920px]"
            direction="flex-col"
            className="overflow-hidden"
        >
            <MotionBox
                ref={ref}
                className="px-5 pt-24 md:pt-36 pb-16 md:pb-20"
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
            >
                <BackgroundGrid />
                <FlexContainer center className="overflow-hidden">
                    <MotionH2
                        variants={containerVariants}
                        className="capitalize flex flex-wrap gap-2 overflow-hidden"
                    >
                        <motion.span variants={slideUp} className="block">
                            Don’t worry.
                        </motion.span>
                        <motion.span
                            variants={slideUp}
                            className="block text-[#21D7A6]"
                        >
                            we got you.
                        </motion.span>
                    </MotionH2>
                </FlexContainer>
            </MotionBox>

            <FlexContainer className="px-5 md:pb-[60px] items-stretch -mt-7 md:-mt-8">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop
                    speed={300}
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {configMap.map((card) => (
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
            </FlexContainer>
        </FlexContainer>
    )
}
