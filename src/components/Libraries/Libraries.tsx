'use client'
import React, { useMemo, useRef, useState } from 'react'
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
import { P } from '../Typography/P'

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)
const MotionP = motion(P)

const CARDS_PER_PAGE = 6

type LibrariesProps = {
    cardsData: Array<{
        title: string
        link: string
        author: string
        description: string
        info: string
        type: string
        tag: string
        new: boolean
    }>
}

export const Libraries = ({ cardsData }: LibrariesProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeTag, setActiveTag] = useState<string>('All')

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const tags = useMemo(() => {
        const unique = Array.from(new Set(cardsData.map((c) => c.tag)))
        return ['All', ...unique]
    }, [cardsData])

    const filteredCards =
        activeTag === 'All'
            ? cardsData
            : cardsData.filter((card) => card.tag === activeTag)

    const sortedCards = [...filteredCards].sort((a, b) => {
        if (a.new === b.new) return 0
        return a.new ? -1 : 1
    })

    const totalPages = Math.ceil(sortedCards.length / CARDS_PER_PAGE)
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE
    const endIndex = startIndex + CARDS_PER_PAGE
    const visibleCards = sortedCards.slice(startIndex, endIndex)

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
                    {['Resources', 'to', 'help', 'you', 'build,'].map(
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
                    {['faster'].map((word, i) => (
                        <span key={i} className="overflow-hidden block">
                            <motion.span
                                variants={librariesSlideUp}
                                className="inline-block text-[#21D7A6]"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </MotionH2>
                <div className="overflow-hidden">
                    <MotionP
                        variants={librariesSlideUp}
                        fontSize="text-[15px] md:text-[18px]"
                        className="text-center"
                    >
                        Your most pressing compliance questions answered and a
                        list of tools with security baked in. <br />
                        So you can get back to shipping.
                    </MotionP>
                </div>
                <FlexContainer direction="flex-col">
                    <FlexContainer
                        gap="gap-3"
                        justifyContent="justify-center"
                        className="flex-wrap mt-8"
                    >
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => {
                                    setActiveTag(tag)
                                    setCurrentPage(1)
                                }}
                                className={`px-4 py-2 rounded-md text-sm cursor-pointer duration-300 ${
                                    activeTag === tag
                                        ? 'bg-[#FFF973] text-black'
                                        : 'bg-[#FFFFFF1A] text-white hover:bg-[#ffffff05] hover:text-[#FFF973]'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </FlexContainer>
                    <motion.div
                        variants={librariesCardContainerVariants}
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-5 pt-5"
                    >
                        {visibleCards.map((card, index) => (
                            <LibraryCard
                                key={index}
                                type={card.type}
                                title={card.title}
                                link={card.link}
                                author={card.author}
                                description={card.description}
                                info={card.info}
                                newCard={card.new}
                            />
                        ))}
                    </motion.div>
                    <div className="flex justify-center gap-2 mt-14">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded duration-500 cursor-pointer ${
                                    currentPage === i + 1
                                        ? 'bg-[#FFF973] text-black'
                                        : 'bg-[#FFFFFF1A] text-white hover:bg-[#ffffff05] hover:text-[#FFF973]'
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
