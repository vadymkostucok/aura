'use client'
import Lottie from 'lottie-react'
import React from 'react'

type LottieAnimationProps = {
    animationData: unknown
    className?: string
    ariaLabel?: string
}

export const LottieAnimation = ({
    animationData,
    className = '',
    ariaLabel,
}: LottieAnimationProps) => {
    return (
        <>
            <Lottie
                animationData={animationData}
                loop
                autoplay
                className={className}
                role={ariaLabel ? 'img' : 'presentation'}
                aria-hidden={ariaLabel ? undefined : true}
                aria-label={ariaLabel}
            />
        </>
    )
}
