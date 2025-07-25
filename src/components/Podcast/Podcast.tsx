import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, P } from '../Typography'
import { Box } from '../Box'

const configMap = [
    {
        description:
            'Science Securing Vibe Coded Apps Colin Gounden / CEO of Via',
    },
    {
        description:
            'Science Securing Vibe Coded Apps Colin Gounden / CEO of Via',
    },
    {
        description:
            'Science Securing Vibe Coded Apps Colin Gounden / CEO of Via',
    },
]

export const Podcast = () => {
    return (
        <FlexContainer direction="flex-col" center className="px-10 py-10">
            <H1>The Fast and Curious Podcast</H1>
            <FlexContainer>
                <FlexContainer direction="flex-col">
                    {configMap.map((card, index) => (
                        <Box
                            key={index}
                            className="bg-black border border-gray-700"
                        >
                            <P>{card.description}</P>
                        </Box>
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
                        <button>learn more</button>
                    </FlexContainer>
                </Box>
            </FlexContainer>
        </FlexContainer>
    )
}
