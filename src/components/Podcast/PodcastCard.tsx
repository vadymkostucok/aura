import React from 'react'
import Image from 'next/image'
import { Box } from '../Box'
import { H4, TypographySmall } from '../Typography/Typography'
import { FlexContainer } from '../FlexContainer'

import crossIcon from '@/assets/cross.svg'
import { motion } from 'framer-motion'
import { podcastCardSlideUp } from '../animations/variantsConfig'

const MotionBox = motion(Box)

type PodcastCartType = {
    date: string
    title: string
}

export const PodcastCard = ({ date, title }: PodcastCartType) => {
    return (
        <Box className="overflow-hidden">
            <MotionBox variants={podcastCardSlideUp}>
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
                <FlexContainer className="group bg-[#FFFFFF1A] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg py-4 cursor-pointer">
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-2.5"
                        justifyContent="justify-center"
                        className="px-4"
                    >
                        <H4 className="text-[#FFF973] tracking-tighter">
                            {title}
                        </H4>
                        <FlexContainer>
                            <TypographySmall className="tracking-tight md:tracking-normal uppercase opacity-50">
                                {'Source | URL'}
                            </TypographySmall>
                        </FlexContainer>
                    </FlexContainer>
                    <div className="absolute inset-0 bg-gradient-to-l from-[#00000099] to-[#00000000] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-end items-center p-4" />
                </FlexContainer>
            </MotionBox>
        </Box>
    )
}
