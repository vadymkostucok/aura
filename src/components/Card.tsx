import React from 'react'
import { Box } from './Box'
import { H3, P } from './Typography'
import { FlexContainer } from './FlexContainer'

type CardType = {
    title: string
    description: string
    icon: string
    index: number
}

export const Card = ({ title, description, index }: CardType) => {
    return (
        <FlexContainer direction="flex-col">
            <P>Panel {index}</P>
            <Box className="bg-black border border-gray-700">
                <H3>{title}</H3>
                <P>{description}</P>
            </Box>
        </FlexContainer>
    )
}
