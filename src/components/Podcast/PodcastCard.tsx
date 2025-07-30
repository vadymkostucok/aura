import React from 'react'
import Image from 'next/image'
import { Box } from '../Box'
import { H4, P, TypographySmall } from '../Typography'
import { FlexContainer } from '../FlexContainer'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import crossIcon from '@/assets/cross.svg'

type PodcastCartType = {
    date: string
    icon: StaticImport
    title: string
    author: string
    position: string
}

export const PodcastCard = ({
    date,
    icon,
    title,
    author,
    position,
}: PodcastCartType) => {
    return (
        <Box>
            <FlexContainer
                width="max-w-60"
                gap="gap-2.5"
                className="clip-panel-label gap-2.5 bg-[#ffffff08] backdrop-blur-lg py-2 pl-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall>{date}</TypographySmall>
            </FlexContainer>
            <FlexContainer className="rounded-[2px] bg-[#ffffff10] border border-[#ffffff10] backdrop-blur-lg p-4">
                <Image
                    src={icon}
                    alt="podcast icon"
                    className="rounded-[2px] w-24 h-20"
                />
                <FlexContainer
                    direction="flex-col"
                    justifyContent="justify-center"
                    className="px-6"
                >
                    <H4 className="text-[#FFF973]">{title}</H4>
                    <FlexContainer>
                        <P>{author}</P>
                        <span className="px-2 text-white">/</span>
                        <P className="text-[#21D7A6]">{position}</P>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Box>
    )
}
