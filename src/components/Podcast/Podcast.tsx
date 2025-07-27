import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, P } from '../Typography'
import { Box } from '../Box'
import { PodcastCard } from './PodcastCard'

const configMap = [
    {
        date: 'July 26, 2025',
        title: 'Science Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via',
    },
    {
        date: 'July 26, 2025',
        title: 'Science Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via',
    },
    {
        date: 'July 26, 2025',
        title: 'Science Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via',
    },
]

export const Podcast = () => {
    return (
        <FlexContainer direction="flex-col" center className="px-10 pt-36">
            <H2>The Fast and Curious Podcast</H2>
            <FlexContainer>
                <FlexContainer direction="flex-col" gap="gap-6">
                    {configMap.map((card, index) => (
                        <PodcastCard
                            key={index}
                            date={card.date}
                            title={card.title}
                            author={card.author}
                            position={card.position}
                        />
                    ))}
                </FlexContainer>
                <Box>
                    <FlexContainer direction="flex-col" center gap="gap-6">
                        <Box>Icon</Box>
                        <P>
                            Join our community and access our “15 Minutes With…”
                            webcasts LIVE. Each webcast covers a pressing topic
                            by an expert, who with take questions from the
                            audience.
                        </P>
                        <button className="uppercase text-[#FFF973]">
                            learn_more
                        </button>
                    </FlexContainer>
                </Box>
            </FlexContainer>
        </FlexContainer>
    )
}
