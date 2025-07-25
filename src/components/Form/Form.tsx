import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, H3, P } from '../Typography'

export const Form = () => {
    return (
        <FlexContainer className="px-10 py-10">
            <FlexContainer direction="flex-col">
                <H1>
                    Join Our <br />
                    <span className="text-green-300">Community</span>
                </H1>
                <P>
                    Get exclusive access to our live webcasts, special events,
                    messaging group, security experts, and more.
                </P>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                className="border border-gray-700"
            >
                <H3>Apply Now</H3>
                <form action="" className="flex flex-col">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Enter your full name"
                        className="bg-gray-700"
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="bg-gray-700"
                    />

                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="+31 6 12 34 56 78"
                        className="bg-gray-700"
                    />
                    <p>
                        {
                            "By clicking 'Send Message' you're confirming that you agree with our Terms and Conditions."
                        }
                    </p>
                    <button
                        type="submit"
                        className="bg-green-300 text-black text-left"
                    >
                        Submit
                    </button>
                </form>
            </FlexContainer>
        </FlexContainer>
    )
}
