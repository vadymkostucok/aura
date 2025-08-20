import { forwardRef, ReactNode } from 'react'

export const P = forwardRef<
    HTMLParagraphElement,
    {
        children: ReactNode
        fontSize?: string
        opacity?: string
        role?: string
        className?: string
    }
>(
    (
        {
            children,
            fontSize = 'text-[15px] md:text-[16px]',
            opacity = 'opacity-90',
            role,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <p
                ref={ref}
                role={role}
                className={`${className} ${fontSize} ${opacity} leading-5`}
                {...props}
            >
                {children}
            </p>
        )
    }
)

P.displayName = 'P'
