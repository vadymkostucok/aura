import { forwardRef, ReactNode } from 'react'

export const P = forwardRef<
    HTMLParagraphElement,
    {
        children: ReactNode
        fontSize?: string
        className?: string
    }
>(({ children, fontSize = 'text-[15px]', className }, ref) => {
    return (
        <p
            ref={ref}
            className={`${className} ${fontSize} md:text-[16px] leading-5 opacity-90`}
        >
            {children}
        </p>
    )
})

P.displayName = 'P'
