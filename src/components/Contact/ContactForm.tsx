import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/Typography'
import { TypographyButton } from '../Typography/TypographyButton'
import { LottieAnimation } from '../LottieAnimation'

import singleArrow from '@/assets/singleArrowBlack.json'
import singleArrowGreen from '@/assets/singleArrowGreen.json'
import { Input } from '../Input'

export const ContactForm = () => {
    return (
        <FlexContainer
            width="w-full lg:w-[530px]"
            direction="flex-col"
            className="bg-[#FFFFFF1A] lg:bg-[#FFFFFF05] border border-[#ffffff10] rounded-[2px] px-5 py-8"
        >
            <H3 className="text-[#FFF973]">Apply Now</H3>
            <form action="" className="flex flex-col gap-6 pt-5">
                <Input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    label="Name"
                />

                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="aura@security.com"
                    label="Email Address"
                />

                <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+31 6 12 34 56 78"
                    label="Phone"
                    hasDisclaimer
                />

                <button
                    type="submit"
                    className="group bg-[#21D7A6] hover:bg-transparent uppercase text-black hover:text-[#21D7A6] hover:border hover:border-[#21D7A6] rounded-[2px] text-left p-4 duration-500"
                >
                    <FlexContainer
                        gap="gap-2.5"
                        justifyContent="justify-between"
                    >
                        <TypographyButton>Submit</TypographyButton>
                        <LottieAnimation
                            animationData={singleArrow}
                            className="group-hover:hidden block w-3.5 md:w-5"
                        />
                        <LottieAnimation
                            animationData={singleArrowGreen}
                            className="group-hover:block hidden w-3.5 md:w-5"
                        />
                    </FlexContainer>
                </button>
            </form>
        </FlexContainer>
    )
}
