import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, P, TypographyButton, TypographyDisclaimer } from '../Typography'
import { Box } from '../Box'
import { BackgroundGrid } from '../BackgroundGrid'
import { LottieAnimation } from '../LottieAnimation'
import Image from 'next/image'

import ArrowsCTA from '@/assets/ArrowsCTA.json'
import ArrowsCTAYellow from '@/assets/ArrowsCTAYellow.json'
import plusIcon from '@/assets/plus.svg'

export const Intro = () => {
    return (
        <Box id="intro" className="overflow-hidden w-full">
            <BackgroundGrid />
            <FlexContainer direction="flex-col" minHeight="min-h-screen" center>
                <P
                    fontSize="text-[13px]"
                    className="w-[280px] md:w-auto text-center uppercase text-[#FFF973] opacity-100"
                >
                    Illuminate your path to cybersecurity mastery
                </P>
                <H1 className="relative uppercase">
                    <Image
                        src={plusIcon}
                        alt="plus icon"
                        className="absolute -top-10 left-0"
                    />
                    Aura
                    <Image
                        src={plusIcon}
                        alt="plus icon"
                        className="absolute -top-10 right-0"
                    />
                </H1>
                <P className="w-[330px] md:w-auto text-center opacity-80">
                    The cybersecurity world is daunting. <br />
                    We’ll guide you through it, no matter your skill level.
                </P>
                <div className="hidden md:block absolute bottom-0 left-0 w-full p-5">
                    <FlexContainer justifyContent="justify-between">
                        <TypographyDisclaimer>
                            ©2025_aura security
                        </TypographyDisclaimer>
                        <TypographyDisclaimer>
                            [Scroll to discover]
                        </TypographyDisclaimer>
                    </FlexContainer>
                </div>
                <div className="group absolute bottom-20 md:bottom-16 left-1/2 -translate-x-1/2 cursor-pointer">
                    <LottieAnimation
                        animationData={ArrowsCTA}
                        className="group-hover:hidden block md:h-32 w-44 md:w-64 absolute left-1/2 -translate-x-1/2 -bottom-7.5 md:-bottom-[49px]"
                    />
                    <LottieAnimation
                        animationData={ArrowsCTAYellow}
                        className="group-hover:block hidden md:h-32 w-44 md:w-64 absolute left-1/2 -translate-x-1/2 -bottom-7.5 md:-bottom-[49px]"
                    />
                    <button className="group-hover:text-[#FFF973] duration-500">
                        <TypographyButton fontSize="text-sm md:text-lg">
                            Learn More
                        </TypographyButton>
                    </button>
                </div>
            </FlexContainer>
        </Box>
    )
}
