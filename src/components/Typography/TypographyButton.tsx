'use client'
import React, { forwardRef, useImperativeHandle } from 'react'
import { useScramble } from 'use-scramble'

type TypographyButtonProps = {
    children: string
    fontSize?: string
    className?: string
    disableInternalHover?: boolean
}

export type TypographyButtonHandle = {
    replay: () => void
}

export const TypographyButton = forwardRef<
    TypographyButtonHandle,
    TypographyButtonProps
>(
    (
        {
            children,
            fontSize = 'text-[13px]',
            className,
            disableInternalHover = false,
        },
        ref
    ) => {
        const { ref: scrambleRef, replay } = useScramble({
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

        useImperativeHandle(ref, () => ({ replay }))

        return (
            <p
                ref={scrambleRef}
                onMouseEnter={!disableInternalHover ? replay : undefined}
                onMouseLeave={!disableInternalHover ? replay : undefined}
                className={`${className} ${fontSize} font-disket cursor-pointer`}
            >
                {children}
            </p>
        )
    }
)

TypographyButton.displayName = 'TypographyButton'
