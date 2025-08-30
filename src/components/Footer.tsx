import React from 'react'
import { TypographyDisclaimer } from './Typography/Typography'

export const Footer = () => {
    return (
        <footer className="flex p-5 gap-1.5">
            <TypographyDisclaimer className="underline cursor-pointer">
                <a href="https://www.solvewithvia.com/privacy/">
                    Privacy Policy
                </a>
            </TypographyDisclaimer>
            <TypographyDisclaimer>|</TypographyDisclaimer>
            <TypographyDisclaimer>
                Copyright © VIA Science, Inc.
                <span className="hidden md:inline-block">
                    All rights reserved
                </span>
            </TypographyDisclaimer>
        </footer>
    )
}
