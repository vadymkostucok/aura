import { ReactNode } from 'react'

export function H1({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h1
            className={`${className} font-violet scroll-m-20 text-[186px] leading-[1.1] tracking-tight`}
        >
            {children}
        </h1>
    )
}

export function H2({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h2
            className={`${className} font-violet scroll-m-20 text-7xl tracking-tight`}
        >
            {children}
        </h2>
    )
}

export function H3({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h3 className={`${className} font-violet scroll-m-20 text-[40px]`}>
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
        <h4 className={`${className} font-violet scroll-m-20 text-[26px]`}>
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
        <h5 className={`${className} font-violet scroll-m-20 text-[20px]`}>
            {children}
        </h5>
    )
}

export function P({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return <p className={`${className} text-[15px] leading-5`}>{children}</p>
}

export function TypographySmall({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return <small className={`${className} text-[13px]`}>{children}</small>
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

export function TypographyMuted({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <p className={`${className} text-sm text-muted-foreground`}>
            {children}
        </p>
    )
}
