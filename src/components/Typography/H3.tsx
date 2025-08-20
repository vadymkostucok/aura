import { forwardRef, HTMLProps, ReactNode } from 'react'

type H3Props = HTMLProps<HTMLHeadingElement> & {
    children: ReactNode
    fontSize?: string
    className?: string
}

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
    ({ children, fontSize = 'text-[32px]', className = '', ...props }, ref) => {
        return (
            <h3
                ref={ref}
                className={`${className} ${fontSize} font-violet scroll-m-20 md:text-[40px]`}
                {...props}
            >
                {children}
            </h3>
        )
    }
)

H3.displayName = 'H3'
