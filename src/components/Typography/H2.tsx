import { forwardRef, ReactNode } from 'react'

export const H2 = forwardRef<
    HTMLHeadingElement,
    {
        children: ReactNode
        fontSize?: string
        className?: string
    }
>(({ children, fontSize = 'text-6xl', className }, ref) => {
    return (
        <h2
            ref={ref}
            className={`${className} ${fontSize} font-violet scroll-m-20 md:text-7xl tracking-tight`}
        >
            {children}
        </h2>
    )
})

H2.displayName = 'H2'
