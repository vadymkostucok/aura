import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, TypographySmall } from '../Typography'

export const Intro = () => {
    return (
        <FlexContainer
            direction="flex-col"
            minHeight="min-h-screen"
            gap="gap-6"
            center
        >
            <header className="absolute top-0 left-1/2 -translate-x-1/2">
                <FlexContainer gap="gap-2">
                    <div>icon</div>
                    <nav>
                        <ul className="flex gap-2">
                            <li>resources</li>
                            <li>community</li>
                            <li>certifications</li>
                        </ul>
                    </nav>
                </FlexContainer>
            </header>
            <TypographySmall className="uppercase">
                Illuminate your path to cybersecurity mastery
            </TypographySmall>
            <H1 className="uppercase">Aura</H1>
            <TypographySmall className="text-center">
                The cybersecurity world is daunting. <br />
                We’ll guide you through it, no matter your skill level.
            </TypographySmall>
            <div className="absolute bottom-0 left-0 w-full">
                <FlexContainer justifyContent="justify-between">
                    <TypographySmall>©2025_aura security</TypographySmall>
                    <TypographySmall>Learn More</TypographySmall>
                    <TypographySmall>[Scroll to discover]</TypographySmall>
                </FlexContainer>
            </div>
        </FlexContainer>
    )
}
