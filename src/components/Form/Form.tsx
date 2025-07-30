import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H3, H5, P } from '../Typography'
import Image from 'next/image'

import insta from '@/assets/insta.svg'
import github from '@/assets/github.svg'
import x from '@/assets/x.svg'
import youtube from '@/assets/youtube.svg'

export const Form = () => {
    return (
        <FlexContainer className="px-10 pt-36 pb-48" center>
            <FlexContainer width="w-6xl" className="gap-48">
                <FlexContainer
                    width="w-96"
                    direction="flex-col"
                    justifyContent="justify-between"
                >
                    <FlexContainer direction="flex-col" gap="gap-6">
                        <H2>
                            Join Our <br />
                            <span className="text-[#21D7A6]">Community</span>
                        </H2>
                        <P>
                            Get exclusive access to our live webcasts, special
                            events, messaging group, security experts, and more.
                        </P>
                    </FlexContainer>
                    <FlexContainer direction="flex-col" gap="gap-5">
                        <H5>Social links:</H5>
                        <FlexContainer gap="gap-2.5">
                            <Image
                                src={insta}
                                alt="social media icon"
                                className="w-14 border border-[#ffffff25] p-4 rounded-full"
                            />
                            <Image
                                src={github}
                                alt="social media icon"
                                className="w-14 border border-[#ffffff25] p-4 rounded-full"
                            />
                            <Image
                                src={x}
                                alt="social media icon"
                                className="w-14 border border-[#ffffff25] p-4 rounded-full"
                            />
                            <Image
                                src={youtube}
                                alt="social media icon"
                                className="w-14 border border-[#ffffff25] p-4 rounded-full"
                            />
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    width="w-lg"
                    direction="flex-col"
                    className="border border-[#ffffff10] rounded-[2px] p-4"
                >
                    <H3 className="text-[#FFF973]">Apply Now</H3>
                    <form action="" className="flex flex-col gap-6">
                        <FlexContainer direction="flex-col" gap="gap-2.5">
                            <label
                                htmlFor="fullName"
                                className="uppercase text-[10px]"
                            >
                                Name
                                <span className="text-[#21D7A6]">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="Your Full Name"
                                className="bg-[#ffffff10] p-4"
                            />
                        </FlexContainer>

                        <FlexContainer direction="flex-col" gap="gap-2.5">
                            <label
                                htmlFor="email"
                                className="uppercase text-[10px]"
                            >
                                Email Address
                                <span className="text-[#21D7A6]">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="aura@security.com"
                                className="bg-[#ffffff10] p-4"
                            />
                        </FlexContainer>

                        <FlexContainer direction="flex-col" gap="gap-2.5">
                            <label
                                htmlFor="phone"
                                className="uppercase text-[10px]"
                            >
                                Phone
                                <span className="text-[#21D7A6]">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="+31 6 12 34 56 78"
                                className="bg-[#ffffff10] p-4"
                            />
                            <p>
                                {
                                    "By clicking 'Send Message' you're confirming that you agree with our"
                                }{' '}
                                <span className="underline">
                                    Terms and Conditions.
                                </span>
                            </p>
                        </FlexContainer>
                        <button
                            type="submit"
                            className="bg-[#21D7A6] uppercase text-black text-left px-5 py-2.5"
                        >
                            Submit
                        </button>
                    </form>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
