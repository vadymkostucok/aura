'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H5, TypographySmall } from '../Typography'
import { Box } from '../Box'
import Image from 'next/image'

import cam from '@/assets/cam.png'
import link from '@/assets/link.png'
import save from '@/assets/save.png'
import check from '@/assets/check.png'
import crossIcon from '@/assets/cross.svg'
import singleArrow from '@/assets/singleArrow.json'
import Lottie from 'lottie-react'

const mapConfig = [
    { description: 'Cybersecurity 101', type: 'video', icon: cam },
    {
        description: 'Cybersecurity for new Vibe Coders',
        type: 'video',
        icon: cam,
    },
    { description: 'Viber Coder Security', type: 'checklist', icon: check },
    {
        description: 'Prompts to ensure your code is secure',
        type: 'pdf document',
        icon: save,
    },
    {
        description: 'Security libraries for Vibe Coders',
        type: 'links',
        icon: link,
    },
    {
        description: 'Intro to Compliance for Vibe Coders',
        type: 'video',
        icon: cam,
    },
]

export const Libraries = () => {
    return (
        <FlexContainer className="px-10 pt-36" center>
            <FlexContainer
                width="w-[1200px]"
                direction="flex-col"
                gap="gap-10"
                center
            >
                <H2>Library for Vibe Coders</H2>
                <div className="grid grid-cols-3 gap-5">
                    {mapConfig.map((card, index) => (
                        <Box key={index}>
                            <FlexContainer
                                width="max-w-60"
                                gap="gap-2.5"
                                className="clip-panel-label bg-[#ffffff07] backdrop-blur-md py-1.5 px-4"
                            >
                                <Image src={crossIcon} alt="cross icon" />
                                <TypographySmall className="uppercase opacity-60">
                                    {card.type}
                                </TypographySmall>
                            </FlexContainer>
                            <FlexContainer
                                className="group p-4 bg-[#ffffff15] hover:bg-[#ffffff05] border border-[#ffffff10] rounded-[2px] hover:text-[#FFF973] backdrop-blur-lg cursor-pointer duration-500"
                                gap="gap-5"
                                alignItems="items-center"
                            >
                                <FlexContainer
                                    width="w-auto"
                                    className="shrink-0 bg-[#00000080] py-4 px-6"
                                >
                                    <Image
                                        src={card.icon}
                                        alt={card.type}
                                        className="w-14"
                                    />
                                </FlexContainer>
                                <H5 className="tracking-tight leading-none">
                                    {card.description}
                                </H5>
                                <div className="opacity-0 group-hover:opacity-100 absolute right-0 bottom-0 bg-[#00000080] p-2.5 duration-500">
                                    <Lottie
                                        animationData={singleArrow}
                                        loop
                                        autoplay
                                        className="w-5"
                                    />
                                </div>
                            </FlexContainer>
                        </Box>
                    ))}
                </div>
            </FlexContainer>
        </FlexContainer>
    )
}
