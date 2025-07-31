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
                className="clip-panel-label bg-[#ffffff07] backdrop-blur-md py-1.5 px-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall className="uppercase opacity-60">
                    {date}
                </TypographySmall>
            </FlexContainer>
            <FlexContainer className="bg-[#ffffff15] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg p-4">
                <Image
                    src={icon}
                    alt={`Podcast thumbnail: ${title}`}
                    className="rounded-[2px] w-24 h-20"
                />
                <FlexContainer
                    direction="flex-col"
                    justifyContent="justify-center"
                    className="px-6"
                >
                    <H4 className="text-[#FFF973] tracking-tighter">{title}</H4>
                    <FlexContainer>
                        <TypographySmall className="uppercase text-[#fff]">
                            {author}
                        </TypographySmall>
                        <span className="px-2 text-white">/</span>
                        <TypographySmall className="uppercase text-[#21D7A6]">
                            {position}
                        </TypographySmall>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Box>
    )
}
