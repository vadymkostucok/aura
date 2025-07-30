'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H3, P } from '../Typography'
import { Box } from '../Box'
import Image from 'next/image'
import Lottie from 'lottie-react'

import Blocks from '@/assets/Blocks.json'
import broken from '@/assets/shape.png'

export const Report = () => {
    return (
        <FlexContainer
            justifyContent="justify-between"
            className="px-10 pt-36 max-w-[1920px]"
        >
            <H2>Breaches Report</H2>
            <Box>
                <FlexContainer
                    width="w-auto"
                    className="px-5 py-2 clip-panel-label-both bg-[#ffffff05] backdrop-blur-lg"
                    gap="gap-5"
                    center
                >
                    <Lottie
                        animationData={Blocks}
                        loop
                        autoplay
                        className="h-2.5"
                    />
                    <P className="uppercase">Breach / cyber danger reports</P>
                    <Lottie
                        animationData={Blocks}
                        loop
                        autoplay
                        className="h-2.5"
                    />
                </FlexContainer>
                <FlexContainer
                    className="px-32 py-40 bg-[#11000002] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg text-[#FFF973] uppercase"
                    gap="gap-10"
                    center
                >
                    <H3>Coming</H3>
                    <Image src={broken} alt="coming soon" />
                    <H3>Soon...</H3>
                </FlexContainer>
            </Box>
        </FlexContainer>
    )
}
