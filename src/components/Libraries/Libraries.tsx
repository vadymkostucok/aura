import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, P } from '../Typography'
import { Box } from '../Box'

const mapConfig = [
    { description: 'Intro to Compliance for Vibe Coders' },
    { description: 'Intro to Compliance for Vibe Coders' },
    { description: 'Intro to Compliance for Vibe Coders' },
    { description: 'Intro to Compliance for Vibe Coders' },
    { description: 'Intro to Compliance for Vibe Coders' },
    { description: 'Intro to Compliance for Vibe Coders' },
]

export const Libraries = () => {
    return (
        <FlexContainer direction="flex-col" className="px-10 py-10">
            <H1>Library for Vibe Coders</H1>
            <div className="grid grid-cols-3">
                {mapConfig.map((card, index) => (
                    <Box
                        key={index}
                        className="bg-black border border-gray-700"
                    >
                        <P>{card.description}</P>
                    </Box>
                ))}
            </div>
        </FlexContainer>
    )
}
