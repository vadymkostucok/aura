'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographySmall } from '../Typography/Typography'
import { motion } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import Image from 'next/image'

import viaLogo from '@/assets/viaLogo.webp'
import './header.css'

export const Header = () => {
    const isLoaded = useHasLoaderFinished()

    return (
        <motion.header
            className="w-full md:w-fit absolute top-5 left-1/2 -translate-x-1/2 z-20 px-4 md:px-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <FlexContainer
                width="w-full md:w-fit"
                className=" backdrop-blur-md bg-[#FFFFFF05]"
            >
                <FlexContainer
                    width="w-auto"
                    className="px-2.5 md:px-[30px] py-2 md:py-2.5 fade-border rounded-[2px] bg-[#FFFFFF05] shrink-0 backdrop-blur-md leading-none"
                    center
                >
                    <Image
                        src={viaLogo}
                        alt="VIA logo"
                        role="none"
                        className="w-14 md:w-20"
                    />
                </FlexContainer>
                <nav className="w-full md:w-fit fade-border rounded-[2px] no-left -ml-[4px]">
                    <ul className="flex px-1 md:px-6 justify-center">
                        <li className="leading-none px-2.5 md:px-4 pt-3 md:pt-3.5 pb-3 md:pb-4.5">
                            <TypographySmall className="cursor-pointer uppercase whitespace-nowrap text-[#f7f7f7] hover:text-[#fff973] duration-500">
                                Banner for event announcements
                            </TypographySmall>
                        </li>
                    </ul>
                </nav>
            </FlexContainer>
        </motion.header>
    )
}
