import React from 'react'
import Image from 'next/image'
import { FlexContainer } from '../FlexContainer'
import { H4, TypographySmall } from '../Typography/Typography'
import { P } from '../Typography/P'
import { Box } from '../Box'

import crossIcon from '@/assets/cross.svg'

type AboutCardType = {
    title: string
    description: string
    company: string
    website: string
    index: string
}

export const AboutCard = ({
    title,
    description,
    company,
    website,
    index,
}: AboutCardType) => {
    return (
        <FlexContainer direction="flex-col" className="h-full">
            <FlexContainer
                width="max-w-60"
                gap="gap-2.5"
                className="clip-panel-label bg-[#FFFFFF0D] backdrop-blur-md py-1.5 px-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall className="uppercase opacity-60">
                    Panel-{index}
                </TypographySmall>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-between"
                className="bg-[#FFFFFF1A] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg flex-1 pl-4 pr-2.5"
            >
                <FlexContainer
                    alignItems="items-center"
                    justifyContent="justify-between"
                    className="pt-5 pb-5 md:pb-8"
                >
                    <H4 className="text-[#FFF973] h-[48px] leading-none tracking-tight truncate">
                        {title}
                    </H4>
                </FlexContainer>
                <FlexContainer
                    direction="flex-col"
                    justifyContent="justify-between"
                    gap="gap-2.5"
                    className="pb-5 h-full"
                >
                    <P>{description}</P> <br />
                    <Box>
                        <P
                            role="button"
                            tabIndex={0}
                            className="font-bold truncate"
                        >
                            {company}
                        </P>
                        <P>{website}</P>
                    </Box>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
