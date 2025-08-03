import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H5 } from '../Typography/Typography'
import { P } from '../Typography/P'
import { Box } from '../Box'

import { Instagram } from '../svg/Instagram'
import { Github } from '../svg/Github'
import { X } from '../svg/X'
import { Youtube } from '../svg/Youtube'
import { ContactForm } from './ContactForm'

const socialMediaMap = [
    { logo: <Instagram /> },
    { logo: <Github /> },
    { logo: <X /> },
    { logo: <Youtube /> },
]

export const Contact = () => {
    return (
        <FlexContainer className="pt-24 md:pt-36 pb-48 px-5" center>
            <FlexContainer
                direction="flex-col lg:flex-row"
                justifyContent="justify-center"
                gap="gap-10 2xl:gap-32"
            >
                <FlexContainer
                    width="w-full lg:w-1/2"
                    direction="flex-col"
                    alignItems="items-end"
                    justifyContent="justify-between"
                >
                    <FlexContainer
                        width="lg:w-[420px]"
                        direction="flex-col"
                        gap="gap-5 md:gap-10"
                    >
                        <H2>
                            Join Our <br />
                            <span className="text-[#21D7A6]">Community</span>
                        </H2>
                        <P>
                            Get exclusive access to our live webcasts, special
                            events, messaging group, security experts, and more.
                        </P>
                    </FlexContainer>
                    <FlexContainer
                        width="lg:w-[420px]"
                        direction="flex-col"
                        gap="gap-5"
                        className="hidden lg:flex pb-8"
                    >
                        <H5 className="tracking-tight">Social links:</H5>
                        <FlexContainer gap="gap-1">
                            {socialMediaMap.map((media, index) => (
                                <Box
                                    key={index}
                                    className="group rounded-full border border-[#ffffff25] hover:border-[#fff973] duration-500 p-4 flex items-center"
                                >
                                    {media.logo}
                                </Box>
                            ))}
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer width="w-full lg:w-1/2">
                    <ContactForm />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
