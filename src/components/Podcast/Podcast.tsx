import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, P } from '../Typography'
import { TypographyButton } from '../TypographyButton'
import { PodcastCard } from './PodcastCard'

import podcast1 from '@/assets/podcast1.png'
import podcast2 from '@/assets/podcast2.png'
import podcast3 from '@/assets/podcast3.png'
import Chip from '@/assets/Chip.json'
import singleArrow from '@/assets/singleArrow.json'
import { LottieAnimation } from '../LottieAnimation'

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
        <FlexContainer center className="pt-24 lg:pt-36 px-5">
            <FlexContainer width="w-6xl" direction="flex-col" gap="gap-12">
                <H2 fontSize="text-5xl" className="text-center">
                    The Fast and Curious Podcast
                </H2>
                <FlexContainer
                    direction="flex-col lg:flex-row"
                    gap="gap-10 lg:gap-5"
                >
                    <FlexContainer
                        width="w-full lg:w-4/6"
                        direction="flex-col"
                        gap="gap-4"
                        className="order-2 lg:order-1"
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
                        width="w-full lg:w-1/2"
                        direction="flex-col"
                        gap="gap-6"
                        center
                        className="lg:mt-[32px] lg:border lg:border-[#ffffff10] bg-[#ffffff02] backdrop-blur-lg rounded-[2px] order-1 lg:order-2"
                    >
                        <FlexContainer center className="h-full lg:pt-[15px]">
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
                            <P className="text-center">
                                Join our community and access our “15 Minutes
                                With…” webcasts LIVE. Each webcast covers a
                                pressing topic by an expert, who with take
                                questions from the audience.
                            </P>
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
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
