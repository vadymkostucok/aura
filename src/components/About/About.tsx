import React from 'react'
import { H2 } from '../Typography'
import { FlexContainer } from '../FlexContainer'
import { AboutCard } from './AboutCard'

import happyEmoji from '@/assets/emoji-happy.svg'
import keyEmoji from '@/assets/key.svg'
import ghostEmoji from '@/assets/ghost.svg'
import { BackgroundGrid } from '../BackgroundGrid'
import { Box } from '../Box'

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

export const About = () => {
    return (
        <FlexContainer
            width="w-full md:max-w-[1920px]"
            direction="flex-col"
            className="overflow-hidden"
        >
            <Box className="px-5 pt-24 md:pt-36 pb-16 md:pb-20">
                <BackgroundGrid />
                <FlexContainer center>
                    <H2 className="capitalize">
                        {'Don’t Worry. '}
                        <span className="text-[#21D7A6]">we got you.</span>
                    </H2>
                </FlexContainer>
            </Box>

            <FlexContainer
                gap="gap-5"
                className="px-5 md:pb-[60px] items-stretch -mt-7 md:-mt-8"
            >
                {configMap.map((card) => (
                    <AboutCard
                        key={card.index}
                        index={card.index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    )
}
