import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographySmall } from '../Typography'

import './header.css'
import { Logo } from '../svg/Logo'

export const Header = () => {
    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <FlexContainer className="backdrop-blur-md bg-[#ffffff02]">
                <FlexContainer
                    width="w-auto"
                    className="px-[30px] py-2.5 fade-border rounded-[2px] bg-[#ffffff07] shrink-0 backdrop-blur-md"
                >
                    <Logo className="text-white hover:text-[#21D7A6] duration-500" />
                </FlexContainer>
                <nav className="fade-border rounded-[2px] no-left -ml-[4px]">
                    <ul className="flex px-6">
                        <li className="leading-none px-4 pt-4 pb-5 border-right-gradient">
                            <TypographySmall className="cursor-pointer uppercase text-[#f7f7f7] hover:text-[#fff973] duration-500">
                                resources
                            </TypographySmall>
                        </li>
                        <li className="leading-none px-4 pt-4 pb-5 border-right-gradient">
                            <TypographySmall className="cursor-pointer uppercase text-[#f7f7f7] hover:text-[#fff973] duration-500">
                                community
                            </TypographySmall>
                        </li>
                        <li className="leading-none px-4 pb-5 pt-4">
                            <TypographySmall className="cursor-pointer uppercase text-[#f7f7f7] hover:text-[#fff973] duration-500">
                                certifications
                            </TypographySmall>
                        </li>
                    </ul>
                </nav>
            </FlexContainer>
        </header>
    )
}
