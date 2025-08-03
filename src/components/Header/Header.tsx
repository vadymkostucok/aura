import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographySmall } from '../Typography'

import './header.css'
import { Logo } from '../svg/Logo'

const navigationMap = [
    {
        title: 'resources',
        className: 'border-right-gradient',
    },
    { title: 'community', className: 'border-right-gradient' },
    { title: 'certifications', className: '' },
]

export const Header = () => {
    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-20">
            <FlexContainer className="backdrop-blur-md bg-[#FFFFFF05]">
                <FlexContainer
                    width="w-auto"
                    className="px-2.5 md:px-[30px] py-2 md:py-2.5 fade-border rounded-[2px] bg-[#FFFFFF05] shrink-0 backdrop-blur-md leading-none"
                    center
                >
                    <Logo className="w-14 md:w-20 text-white hover:text-[#21D7A6] duration-500" />
                </FlexContainer>
                <nav className="fade-border rounded-[2px] no-left -ml-[4px]">
                    <ul className="flex px-1.5 md:px-6">
                        {navigationMap.map((menuItem, index) => (
                            <li
                                key={index}
                                className={`leading-none px-3.5 md:px-4 pt-3 md:pt-4 pb-3 md:pb-5 ${menuItem.className}`}
                            >
                                <TypographySmall className="cursor-pointer uppercase text-[#f7f7f7] hover:text-[#fff973] duration-500">
                                    {menuItem.title}
                                </TypographySmall>
                            </li>
                        ))}
                    </ul>
                </nav>
            </FlexContainer>
        </header>
    )
}
