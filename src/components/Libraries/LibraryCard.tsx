import React from 'react'
import { Box } from '../Box'
import { FlexContainer } from '../FlexContainer'
import Image from 'next/image'
import { TypographySmall } from '../Typography/Typography'

import crossIcon from '@/assets/cross.svg'
import singleArrow from '@/assets/singleArrow.json'
import { LottieAnimation } from '../LottieAnimation'
import { motion } from 'framer-motion'
import { libraryCardSlideUp } from '../animations/variantsConfig'
import { P } from '../Typography/P'

type LibraryCardProps = {
    title: string
    description: string
    company: string
    platform: string
    info: string
    type: string
}

const MotionBox = motion(Box)

export const LibraryCard = ({
    type,
    title,
    description,
    company,
    platform,
    info,
}: LibraryCardProps) => {
    return (
        <MotionBox variants={libraryCardSlideUp}>
            <FlexContainer
                width="max-w-60"
                gap="gap-2.5"
                className="clip-panel-label bg-[#FFFFFF0D] backdrop-blur-md py-1.5 px-4"
            >
                <Image src={crossIcon} alt="cross icon" />
                <TypographySmall className="uppercase opacity-60">
                    {type}
                </TypographySmall>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                role="button"
                className="group p-4 bg-[#FFFFFF1A] hover:bg-[#ffffff05] border border-[#ffffff10] rounded-[2px] hover:text-[#FFF973] backdrop-blur-lg cursor-pointer duration-500"
                gap="gap-5"
            >
                <Box>
                    <span
                        aria-level={5}
                        role="heading"
                        className="block font-violet scroll-m-20 text-[21px] tracking-tight leading-none pb-2.5"
                    >
                        {title}
                    </span>
                    <P>{description}</P>
                </Box>
                <Box>
                    <P>
                        <span className="font-bold">{company}</span>
                        <span className="px-1">|</span>
                        <span className="underline">{platform}</span>
                    </P>
                    <P opacity="opacity-50">{info}</P>
                </Box>

                <div className="opacity-0 group-hover:opacity-100 absolute right-0 bottom-0 bg-[#00000080] p-2.5 duration-500">
                    <LottieAnimation
                        animationData={singleArrow}
                        className="w-5"
                    />
                </div>
            </FlexContainer>
        </MotionBox>
    )
}
