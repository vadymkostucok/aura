'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H3, H5, P, TypographySmall } from '../Typography'
import { Box } from '../Box'
import Lottie from 'lottie-react'

import singleArrow from '@/assets/singleArrowBlack.json'
import { Instagram } from '../svg/Instagram'
import { Github } from '../svg/Github'
import { X } from '../svg/X'
import { Youtube } from '../svg/Youtube'

export const Form = () => {
    return (
        <FlexContainer className="px-5 pt-36 pb-48" center>
            <FlexContainer justifyContent="justify-center" className="gap-32">
                <FlexContainer
                    width="w-1/2"
                    direction="flex-col"
                    alignItems="items-end"
                    justifyContent="justify-between"
                >
                    <FlexContainer
                        width="w-[420px]"
                        direction="flex-col"
                        gap="gap-10"
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
                        width="w-[420px]"
                        direction="flex-col"
                        gap="gap-5"
                        className="pb-8"
                    >
                        <H5 className="tracking-tight">Social links:</H5>
                        <FlexContainer gap="gap-1">
                            <Box className="group rounded-full border border-[#ffffff25] hover:border-[#fff973] duration-500 p-4 flex items-center">
                                <Instagram />
                            </Box>
                            <Box className="group rounded-full border border-[#ffffff25] hover:border-[#fff973] duration-500 p-4 flex items-center">
                                <Github />
                            </Box>
                            <Box className="group rounded-full border border-[#ffffff25] hover:border-[#fff973] duration-500 p-4 flex items-center">
                                <X />
                            </Box>
                            <Box className="group rounded-full border border-[#ffffff25] hover:border-[#fff973] duration-500 p-4 flex items-center">
                                <Youtube />
                            </Box>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer width="w-1/2">
                    <FlexContainer
                        width="w-[530px]"
                        direction="flex-col"
                        className="border border-[#ffffff10] rounded-[2px] px-5 py-8"
                    >
                        <H3 className="text-[#FFF973]">Apply Now</H3>
                        <form action="" className="flex flex-col gap-6 pt-5">
                            <FlexContainer direction="flex-col" gap="gap-2.5">
                                <label
                                    htmlFor="fullName"
                                    className="uppercase text-[11px]"
                                >
                                    Name
                                    <span className="text-[#21D7A6]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Your Full Name"
                                    className="bg-[#ffffff09] p-4"
                                />
                            </FlexContainer>

                            <FlexContainer direction="flex-col" gap="gap-2.5">
                                <label
                                    htmlFor="email"
                                    className="uppercase text-[11px]"
                                >
                                    Email Address
                                    <span className="text-[#21D7A6]">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="aura@security.com"
                                    className="bg-[#ffffff09] p-4"
                                />
                            </FlexContainer>

                            <FlexContainer direction="flex-col" gap="gap-2.5">
                                <label
                                    htmlFor="phone"
                                    className="uppercase text-[11px]"
                                >
                                    Phone
                                    <span className="text-[#21D7A6]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="+31 6 12 34 56 78"
                                    className="bg-[#ffffff09] p-4"
                                />
                                <p className="text-[13px] leading-5">
                                    <span className="opacity-50">
                                        {
                                            "By clicking 'Send Message' you're confirming that you agree with our"
                                        }
                                    </span>{' '}
                                    <span className="underline cursor-pointer opacity-50 hover:text-[#fff] hover:opacity-100 duration-500">
                                        Terms and Conditions.
                                    </span>
                                </p>
                            </FlexContainer>
                            <button
                                type="submit"
                                className="bg-[#21D7A6] hover:bg-transparent uppercase text-black hover:text-[#21D7A6] hover:border hover:border-[#21D7A6] rounded-[2px] text-left p-4  duration-500"
                            >
                                <FlexContainer
                                    gap="gap-2.5"
                                    justifyContent="justify-between"
                                >
                                    <TypographySmall className="font-disket">
                                        Submit
                                    </TypographySmall>
                                    <Lottie
                                        animationData={singleArrow}
                                        autoplay
                                        loop
                                        className="w-5"
                                    />
                                </FlexContainer>
                            </button>
                        </form>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
