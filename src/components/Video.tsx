'use client'

import React, { useRef, useState, useEffect } from 'react'

export const VideoScrollWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        const el = contentRef.current
        if (!el) return

        let animationFrame: number

        const updateHeight = () => {
            if (animationFrame) cancelAnimationFrame(animationFrame)
            animationFrame = requestAnimationFrame(() => {
                setHeight(el.offsetHeight)
            })
        }

        const observer = new ResizeObserver(updateHeight)
        observer.observe(el)
        updateHeight()

        return () => {
            observer.disconnect()
            cancelAnimationFrame(animationFrame)
        }
    }, [])

    return (
        <div className="relative isolate" style={{ height }}>
            <div className="sticky top-0 h-screen -z-10">
                <video
                    className="w-full h-full object-cover"
                    src="/video/background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
            </div>

            <div
                ref={contentRef}
                className="absolute top-0 left-0 w-full flex flex-col items-center z-10"
            >
                {children}
            </div>
        </div>
    )
}
