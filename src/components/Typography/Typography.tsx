import { ReactNode } from 'react'

export function H3({
    children,
    fontSize = 'text-[32px]',
    className,
}: {
    children: ReactNode
    fontSize?: string
    className?: string
}) {
    return (
        <h3
            className={`${className} ${fontSize} font-violet scroll-m-20 md:text-[40px]`}
        >
            {children}
        </h3>
    )
}

export function H4({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h4
            className={`${className} font-violet scroll-m-20 leading-none text-[19px] md:text-[26px]`}
        >
            {children}
        </h4>
    )
}

export function H5({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h5 className={`${className} font-violet scroll-m-20 text-[21px]`}>
            {children}
        </h5>
    )
}

export function TypographySmall({
    children,
    fontSize = 'text-[11px]',
    className,
}: {
    children: ReactNode
    fontSize?: string
    className?: string
}) {
    return (
        <small className={`${className} ${fontSize} md:text-[14px]`}>
            {children}
        </small>
    )
}

export function TypographyDisclaimer({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <code className={`${className} text-[11px] uppercase opacity-70`}>
            {children}
        </code>
    )
}

export function TypographyLead({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <p className={`${className} text-xl text-muted-foreground`}>
            {children}
        </p>
    )
}

export function TypographyLarge({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div className={`${className} text-lg font-semibold`}>{children}</div>
    )
}
