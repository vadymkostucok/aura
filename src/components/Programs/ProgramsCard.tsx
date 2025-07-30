import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3, H5, P, TypographySmall } from '../Typography'
import { Box } from '../Box'
import checkIcon from '@/assets/check.svg'
import Image from 'next/image'

import crossIcon from '@/assets/cross.svg'

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
            <FlexContainer justifyContent="justify-between">
                <FlexContainer
                    gap="gap-2.5"
                    className="max-w-60 clip-panel-label gap-2.5 bg-[#ffffff08] backdrop-blur-lg py-2 pl-4"
                    alignItems="items-center"
                >
                    <Image src={crossIcon} alt="cross icon" />
                    <P className="text-[#FFF973] uppercase">{type}</P>
                </FlexContainer>
                <FlexContainer
                    gap="gap-2.5"
                    className="max-w-60 clip-panel-label-mirrored gap-2.5 bg-[#ffffff08] backdrop-blur-lg py-2 pr-4"
                    alignItems="items-center"
                    justifyContent="justify-end"
                >
                    <P className="text-[#F27EFF] uppercase">{complexity}</P>
                    <Image src={crossIcon} alt="cross icon" />
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                gap="gap-6"
                className="bg-[#ffffff01] border border-[#ffffff10] px-10 py-14 backdrop-blur-xl"
            >
                <FlexContainer direction="flex-col">
                    <H3 className="leading-none">{title}</H3>
                    <TypographySmall className="text-[#21D7A6] uppercase">
                        {subtitle}
                    </TypographySmall>
                </FlexContainer>
                {description}
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
                                    <TypographySmall className="uppercase">
                                        {skill}
                                    </TypographySmall>
                                </FlexContainer>
                            ))}
                        </div>
                        <button className="bg-[#fff973] uppercase text-black px-5 py-2.5">
                            learn_more
                        </button>
                    </FlexContainer>
                </Box>
            </FlexContainer>
        </Box>
    )
}
