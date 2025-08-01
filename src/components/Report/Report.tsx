'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H3, TypographySmall } from '../Typography'
import Lottie from 'lottie-react'

import Blocks from '@/assets/Blocks.json'
import logo3D from '@/assets/3DLogo.json'

export const Report = () => {
    return (
        <FlexContainer className="px-5 pt-36 max-w-[1920px] gap-36">
            <H2 className="whitespace-nowrap pt-12">Breaches Report</H2>

            <FlexContainer direction="flex-col" center>
                <FlexContainer
                    width="w-fit"
                    className="px-10 py-1.5 clip-panel-label-both bg-[#ffffff05] backdrop-blur-lg"
                    gap="gap-5"
                    center
                >
                    <Lottie
                        animationData={Blocks}
                        loop
                        autoplay
                        className="h-2.5 opacity-20"
                    />
                    <TypographySmall className="opacity-60 uppercase">
                        Breach / cyber danger reports
                    </TypographySmall>
                    <Lottie
                        animationData={Blocks}
                        loop
                        autoplay
                        className="h-2.5 opacity-20 rotate-180"
                    />
                </FlexContainer>
                <FlexContainer
                    className="py-40 bg-[#11000005] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg text-[#FFF973] uppercase"
                    gap="gap-10"
                    center
                >
                    <H3>Coming</H3>
                    <Lottie animationData={logo3D} loop autoplay />
                    {/* <Image src={broken} alt="coming soon" /> */}
                    {/* <video
                        src="/video/3DLogo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-52"
                    /> */}
                    <H3>Soon...</H3>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
