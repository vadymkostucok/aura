import React from 'react'
import { TypographyDisclaimer } from './Typography/Typography'

export const Footer = () => {
    return (
        <footer className="flex justify-between p-5">
            <TypographyDisclaimer>©2025_aura security</TypographyDisclaimer>
            <TypographyDisclaimer>Privacy Policy</TypographyDisclaimer>
        </footer>
    )
}
