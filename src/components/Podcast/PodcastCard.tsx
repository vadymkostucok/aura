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
                className="clip-panel-label bg-[#FFFFFF0D] backdrop-blur-md py-1.5 px-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall className="uppercase opacity-60">
                    {date}
                </TypographySmall>
            </FlexContainer>
            <FlexContainer className="bg-[#FFFFFF1A] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg p-4">
                <Image
                    src={icon}
                    alt={`Podcast thumbnail: ${title}`}
                    className="rounded-[2px] w-24 h-16 md:w-28 md:h-20"
                />
                <FlexContainer
                    direction="flex-col"
                    gap="gap-1"
                    justifyContent="justify-center"
                    className="px-4 md:px-5"
                >
                    <H4 className="text-[#FFF973] tracking-tighter">{title}</H4>
                    <FlexContainer>
                        <TypographySmall className="uppercase text-[#fff]">
                            {author}
                        </TypographySmall>
                        <TypographySmall className="px-2">/</TypographySmall>
                        <TypographySmall className="uppercase text-[#21D7A6]">
                            {position}
                        </TypographySmall>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Box>
    )
}
