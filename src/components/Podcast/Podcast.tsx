'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, P, TypographySmall } from '../Typography'
import { PodcastCard } from './PodcastCard'
import Lottie from 'lottie-react'

import podcast1 from '@/assets/podcast1.png'
import podcast2 from '@/assets/podcast2.png'
import podcast3 from '@/assets/podcast3.png'
import Chip from '@/assets/Chip.json'
import singleArrow from '@/assets/singleArrow.json'

const configMap = [
    {
        date: 'July 26, 2025',
        icon: podcast1,
        title: 'Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via Science',
    },
    {
        date: 'July 26, 2025',
        icon: podcast2,
        title: 'How do I know my Vibe app is secure?',
        author: 'Colin Gounden',
        position: 'CEO of Via Science',
    },
    {
        date: 'July 26, 2025',
        icon: podcast3,
        title: 'Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via Science',
    },
]

export const Podcast = () => {
    return (
        <FlexContainer center className="px-10 pt-36">
            <FlexContainer
                width="w-6xl"
                direction="flex-col"
                className="gap-12"
            >
                <H2>The Fast and Curious Podcast</H2>
                <FlexContainer gap="gap-5">
                    <FlexContainer
                        width="w-4/6"
                        direction="flex-col"
                        gap="gap-4"
                    >
                        {configMap.map((card, index) => (
                            <PodcastCard
                                key={index}
                                date={card.date}
                                icon={card.icon}
                                title={card.title}
                                author={card.author}
                                position={card.position}
                            />
                        ))}
                    </FlexContainer>
                    <FlexContainer
                        width="w-1/2"
                        direction="flex-col"
                        gap="gap-6"
                        center
                        className="mt-[32px] border border-[#ffffff10] bg-[#ffffff02] backdrop-blur-lg rounded-[2px]"
                    >
                        <FlexContainer center className="h-full pt-[15px]">
                            <Lottie
                                animationData={Chip}
                                loop
                                autoplay
                                className="w-36"
                            />
                        </FlexContainer>
                        <FlexContainer
                            direction="flex-col"
                            center
                            gap="gap-5"
                            className="border-t border-[#ffffff10] h-full p-11"
                        >
                            <P className="text-center">
                                Join our community and access our “15 Minutes
                                With…” webcasts LIVE. Each webcast covers a
                                pressing topic by an expert, who with take
                                questions from the audience.
                            </P>
                            <button className="uppercase cursor-pointer text-[#FFF973]">
                                <FlexContainer gap="gap-2.5">
                                    <TypographySmall className="font-disket">
                                        learn_more
                                    </TypographySmall>
                                    <Lottie
                                        animationData={singleArrow}
                                        autoplay
                                        loop
                                        className="w-5"
                                    />
                                </FlexContainer>
                            </button>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
