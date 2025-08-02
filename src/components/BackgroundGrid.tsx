import React from 'react'

export const BackgroundGrid = () => {
    return (
        <div
            className="pb-10 absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                        `,
                backgroundSize: '16px 16px',
                backgroundPosition: 'center',
            }}
        />
    )
}
