import React from 'react'
import { FlexContainer } from '../FlexContainer'
import {
    H3,
    H5,
    TypographyDisclaimer,
    TypographySmall,
} from '../Typography/Typography'
import { TypographyButton } from '../Typography/TypographyButton'
import { Box } from '../Box'
import Image from 'next/image'

import checkIcon from '@/assets/check.svg'
import crossIcon from '@/assets/altCross.svg'
import Blocks from '@/assets/Blocks.json'
import singleArrowYellow from '@/assets/singleArrow.json'
import singleArrowBlack from '@/assets/singleArrowBlack.json'
import { LottieAnimation } from '../LottieAnimation'
import { P } from '../Typography/P'

type ProgramsCardType = {
    type: string
    complexity: string
    title: string
    subtitle: string
    description: string
    skills: string[]
}

export const ProgramsCard = ({
    type,
    complexity,
    title,
    subtitle,
    description,
    skills,
}: ProgramsCardType) => {
    return (
        <Box>
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-center"
            >
                <FlexContainer
                    width="w-full max-w-44 md:max-w-60"
                    gap="gap-2.5"
                    className=" clip-panel-label bg-[#FFFFFF0D] backdrop-blur-md py-1.5 px-4"
                    alignItems="items-center"
                >
                    <Image src={crossIcon} alt="cross icon" />
                    <TypographySmall className="text-[#FFF973] uppercase">
                        {type}
                    </TypographySmall>
                </FlexContainer>
                <LottieAnimation
                    animationData={Blocks}
                    className="hidden md:block opacity-20 h-2.5"
                />
                <FlexContainer
                    width="w-full max-w-44 md:max-w-60"
                    gap="gap-2.5"
                    className=" clip-panel-label-mirrored bg-[#FFFFFF0D] backdrop-blur-md py-1.5 px-4"
                    alignItems="items-center"
                    justifyContent="justify-end"
                >
                    <TypographySmall className="text-[#F27EFF] uppercase">
                        {complexity}
                    </TypographySmall>
                    <Image src={crossIcon} alt="cross icon" />
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                gap="gap-6"
                className="bg-[#FFFFFF1A] lg:bg-[#FFFFFF05] border border-[#ffffff10] px-5 md:px-10 py-6 md:py-14 backdrop-blur-lg"
            >
                <FlexContainer direction="flex-col">
                    <H3 className="md:leading-none tracking-tight">{title}</H3>
                    <TypographySmall
                        fontSize="text-[13px]"
                        className="text-[#21D7A6] uppercase"
                    >
                        {subtitle}
                    </TypographySmall>
                </FlexContainer>
                <P>{description}</P>
                <Box>
                    <H5 className="pb-2.5">{"Top skills you'll gain"}</H5>

                    <FlexContainer
                        direction="flex-col md:flex-row"
                        justifyContent="justify-between"
                        className="gap-8"
                    >
                        <div className="grid grid-cols-2 gap-2.5 md:gap-3.5">
                            {skills.map((skill, index) => (
                                <FlexContainer
                                    key={index}
                                    alignItems="items-center"
                                    gap="gap-2"
                                >
                                    <Image src={checkIcon} alt="check icon" />
                                    <TypographyDisclaimer className="uppercase">
                                        {skill}
                                    </TypographyDisclaimer>
                                </FlexContainer>
                            ))}
                        </div>
                        <button className="group w-fit h-fit bg-[#fff973] hover:bg-transparent text-black hover:text-[#fff973] hover:border hover:border-[#fff973] rounded-[2px] p-3 md:p-4 duration-500">
                            <FlexContainer gap="gap-2.5">
                                <TypographyButton
                                    fontSize="text-[11px] md:text-[14px]"
                                    className="font-disket"
                                >
                                    learn_more
                                </TypographyButton>
                                <LottieAnimation
                                    animationData={singleArrowBlack}
                                    className="group-hover:hidden block w-3.5 md:w-5"
                                />
                                <LottieAnimation
                                    animationData={singleArrowYellow}
                                    className="group-hover:block hidden w-3.5 md:w-5"
                                />
                            </FlexContainer>
                        </button>
                    </FlexContainer>
                </Box>
            </FlexContainer>
        </Box>
    )
}
