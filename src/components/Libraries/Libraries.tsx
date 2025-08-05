'use client'
import React, { useRef } from 'react'
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

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)

export const Libraries = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <FlexContainer className="pt-24 md:pt-36 px-5" center>
            <MotionFlexContainer
                ref={ref}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
                width="w-full max-w-[1200px]"
                direction="flex-col"
                gap="gap-10"
                center
            >
                <MotionH2
                    variants={librariesContainerVariants}
                    fontSize="text-5xl"
                    className="flex flex-wrap gap-3 overflow-hidden justify-center"
                >
                    {['Library', 'for', 'Vibe', 'Coders'].map((word, i) => (
                        <span key={i} className="overflow-hidden block">
                            <motion.span
                                variants={librariesSlideUp}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </MotionH2>
                <motion.div
                    variants={librariesCardContainerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                    {librarySectionCards.map((card, index) => (
                        <LibraryCard
                            key={index}
                            type={card.type}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))}
                </motion.div>
            </MotionFlexContainer>
        </FlexContainer>
    )
}
