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
        <FlexContainer
            width="w-full md:w-1/2 xl:w-1/3"
            direction="flex-col"
            className="shrink-0 xl:shrink"
        >
            <FlexContainer
                width="max-w-60"
                gap="gap-2.5"
                className="clip-panel-label bg-[#ffffff07] backdrop-blur-md py-1.5 px-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall className="uppercase opacity-60">
                    Panel-{index}
                </TypographySmall>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-between"
                className="bg-[#ffffff15] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg flex-1 pl-4 pr-2.5"
            >
                <FlexContainer
                    alignItems="items-center"
                    justifyContent="justify-between"
                    className="md:pt-4 pb-8"
                >
                    <H3 className="text-[#FFF973] leading-none tracking-tight">
                        {title}
                    </H3>
                    <Image src={icon} alt="Product Icon" />
                </FlexContainer>
                <Box className="pr-[74px] md:pb-4">
                    {description.map((sentence, index) => (
                        <React.Fragment key={index}>
                            <P>{sentence}</P> <br />
                        </React.Fragment>
                    ))}
                </Box>
            </FlexContainer>
        </FlexContainer>
    )
}
