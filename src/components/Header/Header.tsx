import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographySmall } from '../Typography'
import Image from 'next/image'
import logo from '@/assets/Logo_Aura.svg'

import './header.css'

export const Header = () => {
    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <FlexContainer className="backdrop-blur-md">
                <FlexContainer
                    width="w-auto"
                    className="px-8 py-2.5 fade-border rounded-[2px] bg-[#ffffff10] shrink-0"
                >
                    <Image src={logo} alt="Aura Logo" />
                </FlexContainer>
                <nav className="fade-border no-left -ml-[4px]">
                    <ul className="flex px-6">
                        <li className="px-4 py-4 border-right-gradient">
                            <TypographySmall className="uppercase">
                                resources
                            </TypographySmall>
                        </li>
                        <li className="px-4 py-4 border-right-gradient">
                            <TypographySmall className="uppercase">
                                community
                            </TypographySmall>
                        </li>
                        <li className="px-4 py-4">
                            <TypographySmall className="uppercase">
                                certifications
                            </TypographySmall>
                        </li>
                    </ul>
                </nav>
            </FlexContainer>
        </header>
    )
}
