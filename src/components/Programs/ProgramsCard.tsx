import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3, H5, P, TypographyDisclaimer, TypographySmall } from '../Typography'
import { Box } from '../Box'
import Image from 'next/image'
import Lottie from 'lottie-react'

import checkIcon from '@/assets/check.svg'
import crossIcon from '@/assets/altCross.svg'
import Blocks from '@/assets/Blocks.json'
import singleArrow from '@/assets/singleArrowBlack.json'

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
                    gap="gap-2.5"
                    className="max-w-60 clip-panel-label bg-[#ffffff07] backdrop-blur-md py-1.5 px-4"
                    alignItems="items-center"
                >
                    <Image src={crossIcon} alt="cross icon" />
                    <TypographySmall className="text-[#FFF973] uppercase">
                        {type}
                    </TypographySmall>
                </FlexContainer>
                <Lottie
                    animationData={Blocks}
                    loop
                    autoplay
                    className="opacity-20 h-2.5"
                />
                <FlexContainer
                    gap="gap-2.5"
                    className="max-w-60 clip-panel-label-mirrored bg-[#ffffff07] backdrop-blur-md py-1.5 px-4"
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
                className="bg-[#ffffff02] border border-[#ffffff10] px-10 py-14 backdrop-blur-lg"
            >
                <FlexContainer direction="flex-col">
                    <H3 className="leading-none tracking-tight">{title}</H3>
                    <TypographySmall className="text-[#21D7A6] uppercase">
                        {subtitle}
                    </TypographySmall>
                </FlexContainer>
                <P>{description}</P>
                <Box>
                    <H5 className="pb-2.5">{"Top skills you'll gain"}</H5>

                    <FlexContainer justifyContent="justify-between">
                        <div className="grid grid-cols-2 gap-3.5">
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
                        <button className="bg-[#fff973] hover:bg-transparent uppercase text-black hover:text-[#fff973] hover:border hover:border-[#fff973] rounded-[2px] px-5 py-2.5 duration-500">
                            <FlexContainer gap="gap-2.5">
                                <TypographySmall className="font-disket">
                                    learn_more
                                </TypographySmall>
                                <Lottie
                                    animationData={singleArrow}
                                    autoplay
                                    loop
                                    className="w-5"
                                />
                            </FlexContainer>
                        </button>
                    </FlexContainer>
                </Box>
            </FlexContainer>
        </Box>
    )
}
