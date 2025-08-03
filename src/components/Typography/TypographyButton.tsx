'use client'
import React from 'react'
import { useScramble } from 'use-scramble'

type TypographyButtonProps = {
    children: string // string for animation
    fontSize?: string
    className?: string
}

export function TypographyButton({
    children,
    fontSize = 'text-[13px]',
    className,
}: TypographyButtonProps) {
    const { ref, replay } = useScramble({
        text: children,
        speed: 0.5,
        tick: 1,
        step: 2,
        overflow: true,
        scramble: 7,
        seed: 2,
        chance: 1.0,
        range: [65.0, 125.0],
        overdrive: false,
    })

    return (
        <p
            ref={ref}
            onMouseEnter={replay}
            onMouseLeave={replay}
            className={`${className} ${fontSize} font-disket cursor-pointer`}
        >
            {children}
        </p>
    )
}
