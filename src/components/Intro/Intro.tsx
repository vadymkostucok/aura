'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, P, TypographyDisclaimer } from '../Typography'
import { Box } from '../Box'
import ArrowsCTA from '@/assets/ArrowsCTA.json'
import Lottie from 'lottie-react'
import { BackgroundGrid } from '../BackgroundGrid'

export const Intro = () => {
    return (
        <Box className="overflow-hidden w-full">
            <BackgroundGrid />
            <FlexContainer direction="flex-col" minHeight="min-h-screen" center>
                <P className="uppercase text-[#FFF973]">
                    Illuminate your path to cybersecurity mastery
                </P>
                <H1 className="uppercase">Aura</H1>
                <P className="text-center">
                    The cybersecurity world is daunting. <br />
                    We’ll guide you through it, no matter your skill level.
                </P>
                <div className="absolute bottom-0 left-0 w-full p-5">
                    <FlexContainer justifyContent="justify-between">
                        <TypographyDisclaimer>
                            ©2025_aura security
                        </TypographyDisclaimer>
                        <TypographyDisclaimer>
                            [Scroll to discover]
                        </TypographyDisclaimer>
                    </FlexContainer>
                </div>
                <Lottie
                    animationData={ArrowsCTA}
                    loop
                    autoplay
                    className="h-32 w-64 absolute bottom-[15px] left-1/2 -translate-x-1/2"
                />
                <button className="absolute bottom-16 left-1/2 -translate-x-1/2 font-disket text-lg">
                    Learn More
                </button>
            </FlexContainer>
        </Box>
    )
}
