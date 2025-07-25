import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, P } from '../Typography'
import { Box } from '../Box'

export const Intro = () => {
    return (
        <Box>
            <FlexContainer direction="flex-col" minHeight="min-h-screen" center>
                <P className="uppercase text-[#FFF973]">
                    Illuminate your path to cybersecurity mastery
                </P>
                <H1 className="uppercase">Aura</H1>
                <P className="text-center">
                    The cybersecurity world is daunting. <br />
                    We’ll guide you through it, no matter your skill level.
                </P>
                <div className="absolute bottom-0 left-0 w-full">
                    <FlexContainer justifyContent="justify-between">
                        <P>©2025_aura security</P>
                        <P>Learn More</P>
                        <P>[Scroll to discover]</P>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </Box>
    )
}
