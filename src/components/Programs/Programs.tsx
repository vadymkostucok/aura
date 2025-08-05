'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { ProgramsCard } from './ProgramsCard'
import { Box } from '../Box'
import Image from 'next/image'

import Blocks from '@/assets/Blocks.json'
import earthIcon from '@/assets/earth.svg'
import logo3D from '@/assets/3DLogo.json'
import { LottieAnimation } from '../LottieAnimation'
import { H2 } from '../Typography/H2'
import { motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import {
    programsContainerVariants,
    programsSlideUp,
} from '../animations/variantsConfig'

const mapConfig = [
    {
        type: 'PR-01_FREE',
        complexity: 'Entry-level',
        title: 'SOC BTL1 Junior',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            "Once you've completed all 6 of our introduction courses, you can claim your BTJA certificate of completion here!",
        skills: [
            'Redline',
            'Indicators of Compromise',
            'IOC Editor',
            'Indicators of Attack',
        ],
    },
    {
        type: 'PR-02_£399.00 GBP',
        complexity: 'junior',
        title: 'BTL1 SOC Cert',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            'BTL1 is designed to train technical defenders that are capable of defending networks and responding to cyber incidents. The skills and tools you’ll learn in this course will be directly applicable to a range of security roles, and are actively used by defenders around the world.',
        skills: [
            'ATT&CK',
            'Browser History Capturer',
            'Autopsy',
            'JumpList Explorer',
        ],
    },
    {
        type: 'PR-01_FREE',
        complexity: 'Entry-level',
        title: 'SOC BTL1 Junior',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            "Once you've completed all 6 of our introduction courses, you can claim your BTJA certificate of completion here!",
        skills: [
            'Redline',
            'Indicators of Compromise',
            'IOC Editor',
            'Indicators of Attack',
        ],
    },
    {
        type: 'PR-02_£399.00 GBP',
        complexity: 'junior',
        title: 'BTL1 SOC Cert',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            'BTL1 is designed to train technical defenders that are capable of defending networks and responding to cyber incidents. The skills and tools you’ll learn in this course will be directly applicable to a range of security roles, and are actively used by defenders around the world.',
        skills: [
            'ATT&CK',
            'Browser History Capturer',
            'Autopsy',
            'JumpList Explorer',
        ],
    },
]

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)

export const Programs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <MotionFlexContainer
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
            width="w-full max-w-[1920px]"
            direction="flex-col lg:flex-row"
            gap="gap-10 2xl:gap-32"
            className="pt-24 md:pt-36 px-5"
        >
            <MotionFlexContainer width="w-full lg:w-1/2" direction="flex-col">
                <Box className="lg:sticky lg:top-12 lg:mb-[30%]">
                    <MotionH2
                        variants={programsContainerVariants}
                        fontSize="text-5xl"
                        className="lg:pt-12 lg:pb-24 flex flex-wrap gap-3 overflow-hidden"
                    >
                        {[
                            'Index',
                            'of',
                            'popular',
                            'cybersecurity',
                            'programs',
                        ].map((word, i) => (
                            <span key={i} className="overflow-hidden block">
                                <motion.span
                                    variants={programsSlideUp}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </MotionH2>
                    <Box className="hidden lg:block px-2.5 w-40 h-40">
                        <FlexContainer
                            gap="gap-2.5"
                            className="clip-panel-label bg-[#ffffff08] backdrop-blur-lg py-2 pl-4"
                            alignItems="items-center"
                        >
                            <Image
                                src={earthIcon}
                                alt="earth icon"
                                className="opacity-60"
                            />
                            <LottieAnimation
                                animationData={Blocks}
                                className="h-2.5 opacity-20"
                            />
                        </FlexContainer>
                        <Box className="w-fit bg-[#ffffff02] backdrop-blur-lg border border-[#ffffff10]">
                            <LottieAnimation
                                animationData={logo3D}
                                className="px-5 py-7"
                            />
                        </Box>
                    </Box>
                </Box>
            </MotionFlexContainer>
            <FlexContainer
                width="w-full lg:w-1/2"
                direction="flex-col"
                gap="gap-6"
            >
                {mapConfig.map((card, index) => (
                    <ProgramsCard
                        key={index}
                        type={card.type}
                        complexity={card.complexity}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        skills={card.skills}
                    />
                ))}
            </FlexContainer>
        </MotionFlexContainer>
    )
}
