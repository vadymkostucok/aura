import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H5, P, TypographySmall } from '../Typography'
import { Box } from '../Box'
import Image from 'next/image'

import cam from '@/assets/cam.png'
import link from '@/assets/link.png'
import save from '@/assets/save.png'
import check from '@/assets/check.png'
import crossIcon from '@/assets/cross.svg'

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
        description: 'Prompts to ensure your code is secure',
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
                width="w-6xl"
                direction="flex-col"
                gap="gap-10"
                center
            >
                <H2>Library for Vibe Coders</H2>
                <div className="grid grid-cols-3 gap-4">
                    {mapConfig.map((card, index) => (
                        <Box key={index}>
                            <FlexContainer
                                width="max-w-60"
                                gap="gap-2.5"
                                className="clip-panel-label gap-2.5 bg-[#ffffff08] backdrop-blur-lg py-2 pl-4"
                            >
                                <Image src={crossIcon} alt="cross icon" />
                                <TypographySmall className="uppercase">
                                    {card.type}
                                </TypographySmall>
                            </FlexContainer>
                            <FlexContainer
                                className="rounded-[2px] bg-[#ffffff10] border border-[#ffffff10] backdrop-blur-lg p-4"
                                gap="gap-5"
                                alignItems="items-center"
                            >
                                <FlexContainer
                                    width="w-auto"
                                    className="shrink-0 bg-[#00000050] py-2.5 px-4"
                                >
                                    <Image
                                        src={card.icon}
                                        alt={card.type}
                                        className="w-14"
                                    />
                                </FlexContainer>
                                <H5>{card.description}</H5>
                            </FlexContainer>
                        </Box>
                    ))}
                </div>
            </FlexContainer>
        </FlexContainer>
    )
}
