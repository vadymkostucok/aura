import React from 'react'
import { LottieAnimation } from '../LottieAnimation'
import { reportGrowY } from '../animations/variantsConfig'
import { FlexContainer } from '../FlexContainer'
import { TypographySmall } from '../Typography/Typography'
import { motion } from 'framer-motion'
import Blocks from '@/assets/Blocks.json'
import logo3D from '@/assets/3DLogo.json'
import { H3 } from '../Typography/H3'

const MotionFlexContainer = motion(FlexContainer)

export const AboutInfographic = () => {
    return (
        <MotionFlexContainer
            variants={reportGrowY}
            direction="flex-col"
            center
            className="pt-10"
        >
            <FlexContainer
                width="w-fit"
                className="px-10 py-1.5 clip-panel-label-both bg-[#FFFFFF0D] backdrop-blur-lg"
                gap="gap-5"
                center
            >
                <LottieAnimation
                    animationData={Blocks}
                    className="h-2.5 opacity-20"
                />
                <TypographySmall className="opacity-60 uppercase">
                    Breach / cyber danger reports
                </TypographySmall>
                <LottieAnimation
                    animationData={Blocks}
                    className="h-2.5 opacity-20 rotate-180"
                />
            </FlexContainer>
            <FlexContainer
                gap="gap-5 lg:gap-10"
                className="py-20 md:py-40 bg-[#11000005] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg text-[#FFF973] uppercase"
                center
            >
                <H3 fontSize="text-[26px]">Coming</H3>
                <LottieAnimation animationData={logo3D} />
                <H3 fontSize="text-[26px]">Soon...</H3>
            </FlexContainer>
        </MotionFlexContainer>
    )
}
