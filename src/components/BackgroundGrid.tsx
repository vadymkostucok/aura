import React from 'react'

export const BackgroundGrid = () => {
    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
                        `,
                backgroundSize: '25px 25px',
                backgroundPosition: 'center',
            }}
        />
    )
}
