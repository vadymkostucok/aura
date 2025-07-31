import React, { ReactNode } from 'react'

type BoxProps = {
    id?: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export const Box = ({ id, children, className = '', onClick }: BoxProps) => {
    return (
        <div id={id} onClick={onClick} className={`relative ${className}`}>
            {children}
        </div>
    )
}
