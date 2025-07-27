import React from 'react'
import Image from 'next/image'
import { FlexContainer } from '../FlexContainer'
import { H3, P, TypographySmall } from '../Typography'
import { Box } from '../Box'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import crossIcon from '@/assets/cross.svg'

type AboutCardType = {
    title: string
    description: string[]
    icon: StaticImport
    index: string
}

export const AboutCard = ({
    title,
    description,
    icon,
    index,
}: AboutCardType) => {
    return (
        <FlexContainer direction="flex-col">
            <FlexContainer
                width="max-w-60"
                gap="gap-2.5"
                className="clip-panel-label gap-2.5 bg-[#ffffff08] backdrop-blur-lg py-2 pl-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall className="uppercase">
                    Panel-{index}
                </TypographySmall>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-between"
                className="rounded-[2px] bg-[#ffffff10] border border-[#ffffff10] backdrop-blur-lg flex-1 pl-4"
            >
                <FlexContainer
                    alignItems="items-start"
                    justifyContent="justify-between"
                    className="py-6 pr-2.5"
                >
                    <H3 className="text-[#FFF973]">{title}</H3>
                    <Image src={icon} alt="Product Icon" />
                </FlexContainer>
                <Box className="pr-20">
                    {description.map((sentence, index) => (
                        <P key={index} className="pb-9">
                            {sentence}
                        </P>
                    ))}
                </Box>
            </FlexContainer>
        </FlexContainer>
    )
}
