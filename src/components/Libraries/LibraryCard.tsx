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
import { getDomain } from '@/utils/getDomain'

type LibraryCardProps = {
    title: string
    link: string
    author: string
    description: string
    info: string
    type: string
    newCard?: boolean
}

const MotionBox = motion(Box)

export const LibraryCard = ({
    title,
    link,
    author,
    description,
    info,
    type,
    newCard,
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
            <a href={link} target="_blank">
                <FlexContainer
                    direction="flex-col"
                    tabIndex={0}
                    className="group h-full p-4 bg-[#FFFFFF1A] hover:bg-[#ffffff05] border border-[#ffffff10] rounded-[2px] hover:text-[#FFF973] cursor-pointer backdrop-blur-lg duration-500"
                    gap="gap-5"
                >
                    <Box className="flex-1">
                        <FlexContainer justifyContent="justify-between">
                            <span
                                aria-level={5}
                                role="heading"
                                className="block font-violet scroll-m-20 text-[21px] tracking-tight leading-none pb-2.5 whitespace-nowrap text-ellipsis overflow-hidden"
                            >
                                {title}
                            </span>
                            {newCard && (
                                <span className="block font-violet scroll-m-20 text-[12px] p-1 mb-2.5 w-fit shrink-0 border rounded-full">
                                    New
                                </span>
                            )}
                        </FlexContainer>
                        <P>{description}</P>
                    </Box>
                    <Box>
                        <P>
                            <span className="font-bold">{author}</span>
                            <span className="px-2">|</span>
                            <span className="underline">{getDomain(link)}</span>
                        </P>
                        <P className="mt-2.5">{info}</P>
                    </Box>

                    <div className="opacity-0 group-hover:opacity-100 absolute right-0 bottom-0 bg-[#00000080] p-2.5 duration-500">
                        <LottieAnimation
                            animationData={singleArrow}
                            className="w-5"
                        />
                    </div>
                </FlexContainer>
            </a>
        </MotionBox>
    )
}
