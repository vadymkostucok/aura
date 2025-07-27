import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H5, P } from '../Typography'
import { Box } from '../Box'

const mapConfig = [
    { description: 'Intro to Compliance for Vibe Coders', type: 'video' },
    { description: 'Intro to Compliance for Vibe Coders', type: 'video' },
    { description: 'Intro to Compliance for Vibe Coders', type: 'video' },
    { description: 'Intro to Compliance for Vibe Coders', type: 'video' },
    { description: 'Intro to Compliance for Vibe Coders', type: 'pdf' },
    { description: 'Intro to Compliance for Vibe Coders', type: 'links' },
]

export const Libraries = () => {
    return (
        <FlexContainer direction="flex-col" className="px-10 pt-36">
            <H2>Library for Vibe Coders</H2>
            <div className="grid grid-cols-3 gap-4">
                {mapConfig.map((card, index) => (
                    <Box key={index}>
                        <P className="uppercase">{card.type}</P>
                        <Box className="bg-black border border-gray-700 p-4">
                            <H5>{card.description}</H5>
                        </Box>
                    </Box>
                ))}
            </div>
        </FlexContainer>
    )
}
