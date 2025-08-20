'use client'
import React, { useRef, useState } from 'react'
import { H2 } from '../Typography/H2'
import { FlexContainer } from '../FlexContainer'
import { LibraryCard } from './LibraryCard'
import { motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import {
    librariesCardContainerVariants,
    librariesContainerVariants,
    librariesSlideUp,
} from '../animations/variantsConfig'
import { librarySectionCards } from '@/cms/fallbackContent'
import { P } from '../Typography/P'

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)
const MotionP = motion(P)

const CARDS_PER_PAGE = 6

export const Libraries = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const totalPages = Math.ceil(librarySectionCards.length / CARDS_PER_PAGE)

    const startIndex = (currentPage - 1) * CARDS_PER_PAGE
    const endIndex = startIndex + CARDS_PER_PAGE
    const visibleCards = librarySectionCards.slice(startIndex, endIndex)

    const shouldAnimate = isLoaded && isInView

    return (
        <FlexContainer className="pt-24 md:pt-36 px-5" center>
            <MotionFlexContainer
                ref={ref}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
                width="w-full max-w-[1920px]"
                direction="flex-col"
                gap="gap-5"
                center
            >
                <MotionH2
                    variants={librariesContainerVariants}
                    className="flex flex-wrap gap-3 overflow-hidden justify-center"
                >
                    {['Resources', 'to', 'help', 'you', 'build,', 'faster'].map(
                        (word, i) => (
                            <span key={i} className="overflow-hidden block">
                                <motion.span
                                    variants={librariesSlideUp}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        )
                    )}
                </MotionH2>
                <div className="overflow-hidden">
                    <MotionP
                        variants={librariesSlideUp}
                        className="text-center"
                    >
                        Your most pressing compliance questions answered and a
                        list of tools with security baked in. <br />
                        So you can get back to shipping.
                    </MotionP>
                </div>
                <FlexContainer direction="flex-col">
                    <motion.div
                        variants={librariesCardContainerVariants}
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 pt-5"
                    >
                        {visibleCards.map((card, index) => (
                            <LibraryCard
                                key={index}
                                type={card.type}
                                title={card.title}
                                description={card.description}
                                company={card.company}
                                platform={card.platform}
                                info={card.info}
                            />
                        ))}
                    </motion.div>
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded duration-500 cursor-pointer ${
                                    currentPage === i + 1
                                        ? 'bg-[#FFF973] text-black'
                                        : 'bg-[#FFFFFF1A] text-white hover:bg-gray-600 hover:text-[#FFF973]'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </FlexContainer>
            </MotionFlexContainer>
        </FlexContainer>
    )
}
