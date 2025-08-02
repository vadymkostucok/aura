import React from 'react'
import { Box } from '../Box'
import { FlexContainer } from '../FlexContainer'
import Image, { StaticImageData } from 'next/image'
import { H5, TypographySmall } from '../Typography'

import crossIcon from '@/assets/cross.svg'
import singleArrow from '@/assets/singleArrow.json'
import { LottieAnimation } from '../LottieAnimation'

type LibraryCardProps = {
    description: string
    type: string
    icon: StaticImageData
}

export const LibraryCard = ({ type, description, icon }: LibraryCardProps) => {
    return (
        <Box>
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
                className="group p-4 bg-[#FFFFFF1A] hover:bg-[#ffffff05] border border-[#ffffff10] rounded-[2px] hover:text-[#FFF973] backdrop-blur-lg cursor-pointer duration-500"
                gap="gap-5"
                alignItems="items-center"
            >
                <FlexContainer
                    width="w-auto"
                    className="shrink-0 bg-[#00000080] py-3 md:py-4 px-5 md:px-6"
                >
                    <Image src={icon} alt={type} className="w-10 md:w-14" />
                </FlexContainer>
                <H5 className="tracking-tight leading-none">{description}</H5>
                <div className="opacity-0 group-hover:opacity-100 absolute right-0 bottom-0 bg-[#00000080] p-2.5 duration-500">
                    <LottieAnimation
                        animationData={singleArrow}
                        className="w-5"
                    />
                </div>
            </FlexContainer>
        </Box>
    )
}
