import React from 'react'

import { H3, P, TypographySmall } from './Typography'
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
            <TypographySmall className="uppercase">
                Panel-{index}
            </TypographySmall>
            <FlexContainer
                direction="flex-col"
                gap="gap-6"
                className="bg-black border border-gray-700"
            >
                <H3 className="text-[#FFF973]">{title}</H3>
                <P>{description}</P>
            </FlexContainer>
        </FlexContainer>
    )
}
