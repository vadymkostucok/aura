import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H3, TypographySmall } from '../Typography'

import Blocks from '@/assets/Blocks.json'
import logo3D from '@/assets/3DLogo.json'
import { LottieAnimation } from '../LottieAnimation'

export const Report = () => {
    return (
        <FlexContainer
            width="w-full max-w-[1920px]"
            direction="flex-col lg:flex-row"
            gap="gap-10 2xl:gap-36"
            className="pt-24 lg:pt-36 px-5 "
        >
            <H2 className="2xl:whitespace-nowrap md:pt-12">Breaches Report</H2>

            <FlexContainer direction="flex-col" center>
                <FlexContainer
                    width="w-fit"
                    className="px-10 py-1.5 clip-panel-label-both bg-[#ffffff05] backdrop-blur-lg"
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
                    <H3 fontSize="text-[26px]">Soon...</H3>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
