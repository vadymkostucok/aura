import { forwardRef, ReactNode } from 'react'

export const P = forwardRef<
    HTMLParagraphElement,
    {
        children: ReactNode
        fontSize?: string
        opacity?: string
        className?: string
    }
>(
    (
        {
            children,
            fontSize = 'text-[15px]',
            opacity = 'opacity-90',
            className,
            ...props
        },
        ref
    ) => {
        return (
            <p
                ref={ref}
                className={`${className} ${fontSize} ${opacity} md:text-[16px] leading-5`}
                {...props}
            >
                {children}
            </p>
        )
    }
)

P.displayName = 'P'
