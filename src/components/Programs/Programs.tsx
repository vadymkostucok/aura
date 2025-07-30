'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography'
import { ProgramsCard } from './ProgramsCard'
import Image from 'next/image'
import shape from '@/assets/shape.png'
import { Box } from '../Box'
import Lottie from 'lottie-react'

import Blocks from '@/assets/Blocks.json'
import earthIcon from '@/assets/earth.svg'

const mapConfig = [
    {
        type: 'PR-02_£399.00 GBP',
        complexity: 'junior',
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
]

export const Programs = () => {
    return (
        <FlexContainer className="px-10 pt-36 gap-32">
            <FlexContainer direction="flex-col" gap="gap-16">
                <H2>Index of popular cybersecurity programs</H2>
                <Box className="w-36 h-36">
                    <FlexContainer
                        gap="gap-2.5"
                        className="clip-panel-label gap-2.5 bg-[#ffffff08] backdrop-blur-lg py-2 pl-4"
                        alignItems="items-center"
                    >
                        <Image src={earthIcon} alt="earth icon" />
                        <Lottie
                            animationData={Blocks}
                            loop
                            autoplay
                            className="h-2.5"
                        />
                    </FlexContainer>
                    <Box className="w-fit bg-[#ffffff02] backdrop-blur-lg border border-[#ffffff10]">
                        <Image src={shape} alt="coming soon" className="p-5" />
                    </Box>
                </Box>
            </FlexContainer>
            <FlexContainer direction="flex-col" gap="gap-6">
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
        </FlexContainer>
    )
}
