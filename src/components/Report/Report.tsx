'use client'
import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographySmall } from '../Typography/Typography'

import Blocks from '@/assets/Blocks.json'
import { LottieAnimation } from '../LottieAnimation'
import { H2 } from '../Typography/H2'
import { motion, useInView } from 'framer-motion'
import { useHasLoaderFinished } from '@/hooks/useHasLoaderFinished'
import {
    reportContainerVariants,
    reportGrowY,
    reportSlideUp,
} from '../animations/variantsConfig'
import { P } from '../Typography/P'
import {
    TypographyButton,
    TypographyButtonHandle,
} from '../Typography/TypographyButton'

const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)
const MotionP = motion(P)

export const Report = () => {
    const ref = useRef(null)
    const textRef = useRef<TypographyButtonHandle>(null)
    const isInView = useInView(ref, { once: true, margin: '-30% 0px -30% 0px' })
    const isLoaded = useHasLoaderFinished()

    const shouldAnimate = isLoaded && isInView

    return (
        <MotionFlexContainer
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
            width="w-full max-w-[1920px]"
            direction="flex-col lg:flex-row"
            gap="gap-10 2xl:gap-36"
            className="py-24 lg:py-36 px-5"
        >
            <FlexContainer
                width="w-full 2xl:w-[700px]"
                direction="flex-col"
                gap="gap-5"
                className="h-fit overflow-hidden 2xl:shrink-0"
            >
                <MotionH2
                    variants={reportContainerVariants}
                    className="md:pt-12 flex flex-wrap justify-center lg:justify-start gap-3"
                >
                    {[
                        'Protect',
                        'sensitive',
                        'data',
                        '-',
                        'then',
                        'get',
                        'back',
                        'to',
                        'building.',
                    ].map((word, i) => (
                        <span key={i} className="overflow-hidden block">
                            <motion.span
                                variants={reportSlideUp}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </MotionH2>
                <div className="overflow-hidden">
                    <MotionP
                        className="pb-2.5 text-center lg:text-start"
                        variants={reportSlideUp}
                    >
                        {
                            "VIA Zero Trust Fabric (ZTF) helps you tackle your gnarliest access and authorization challenges in a way that's post-quantum secure and user friendly."
                        }
                    </MotionP>
                </div>
                <div className="overflow-hidden flex justify-center lg:justify-start">
                    <motion.button
                        variants={reportSlideUp}
                        onMouseEnter={() => textRef.current?.replay()}
                        onMouseLeave={() => textRef.current?.replay()}
                        className="group w-fit h-fit shrink-0 bg-[#fff973] hover:bg-transparent text-black hover:text-[#fff973] hover:border hover:border-[#fff973] rounded-[2px] p-3 md:p-4 duration-500"
                    >
                        <TypographyButton
                            ref={textRef}
                            disableInternalHover
                            fontSize="text-[11px] md:text-[14px]"
                            className="font-disket"
                        >
                            See ZTF in Action
                        </TypographyButton>
                    </motion.button>
                </div>
            </FlexContainer>
            <MotionFlexContainer
                variants={reportGrowY}
                direction="flex-col"
                center
            >
                <FlexContainer
                    width="w-fit"
                    className="px-10 py-1.5 clip-panel-label-both bg-[#FFFFFF0D] backdrop-blur-lg"
                    gap="gap-5"
                    center
                >
                    <LottieAnimation
                        animationData={Blocks}
                        className="h-2.5 opacity-20"
                    />
                    <TypographySmall className="opacity-60 uppercase">
                        Animated Video
                    </TypographySmall>
                    <LottieAnimation
                        animationData={Blocks}
                        className="h-2.5 opacity-20 rotate-180"
                    />
                </FlexContainer>
                <FlexContainer
                    gap="gap-5 lg:gap-10"
                    className="py-28 lg:py-0 h-auto md:h-full bg-[#11000005] border border-[#ffffff10] rounded-[2px] backdrop-blur-lg text-[#FFF973] uppercase"
                    center
                >
                    {''}
                </FlexContainer>
            </MotionFlexContainer>
        </MotionFlexContainer>
    )
}
