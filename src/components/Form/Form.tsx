import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2, H3, P } from '../Typography'

export const Form = () => {
    return (
        <FlexContainer className="px-10 py-10">
            <FlexContainer direction="flex-col" gap="gap-6">
                <H2>
                    Join Our <br />
                    <span className="text-[#21D7A6]">Community</span>
                </H2>
                <P>
                    Get exclusive access to our live webcasts, special events,
                    messaging group, security experts, and more.
                </P>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                className="border border-gray-700 p-4"
            >
                <H3 className="text-[#FFF973]">Apply Now</H3>
                <form action="" className="flex flex-col gap-6">
                    <FlexContainer direction="flex-col">
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
                            placeholder="Your full name"
                            className="bg-gray-700"
                        />
                    </FlexContainer>

                    <FlexContainer direction="flex-col">
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
                            placeholder="Enter your email"
                            className="bg-gray-700"
                        />
                    </FlexContainer>

                    <FlexContainer direction="flex-col">
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
                            className="bg-gray-700"
                        />
                        <p>
                            {
                                "By clicking 'Send Message' you're confirming that you agree with our Terms and Conditions."
                            }
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
    )
}
