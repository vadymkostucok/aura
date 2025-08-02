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
            className={`${className} font-violet scroll-m-20 text-[130px] md:text-[186px] leading-[1.1] tracking-tight`}
        >
            {children}
        </h1>
    )
}

export function H2({
    children,
    fontSize = 'text-6xl',
    className,
}: {
    children: ReactNode
    fontSize?: string
    className?: string
}) {
    return (
        <h2
            className={`${className} ${fontSize} font-violet scroll-m-20  md:text-7xl tracking-tight`}
        >
            {children}
        </h2>
    )
}

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

export function P({
    children,
    fontSize = 'text-[15px]',
    className,
}: {
    children: ReactNode
    fontSize?: string
    className?: string
}) {
    return (
        <p
            className={`${className} ${fontSize} md:text-[16px] leading-5 opacity-90`}
        >
            {children}
        </p>
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

export function TypographyButton({
    children,
    fontSize = 'text-[13px]',
    className,
}: {
    children: ReactNode
    fontSize?: string
    className?: string
}) {
    return <p className={`${className} ${fontSize} font-disket`}>{children}</p>
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
