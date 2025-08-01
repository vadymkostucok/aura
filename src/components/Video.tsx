'use client'

import React, { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'

export const VideoScrollWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number>(0)
    const [isIntroInView, setIsIntroInView] = useState(true)

    useEffect(() => {
        const el = contentRef.current
        if (!el) return

        const updateHeight = () => setHeight(el.offsetHeight)
        const resizeObserver = new ResizeObserver(updateHeight)
        resizeObserver.observe(el)
        updateHeight()

        return () => resizeObserver.disconnect()
    }, [])

    useEffect(() => {
        const introEl = document.getElementById('intro')
        if (!introEl) return

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntroInView(entry.isIntersecting),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -20% 0px',
            }
        )

        observer.observe(introEl)
        return () => observer.disconnect()
    }, [])

    const videoClass = clsx(
        'w-full h-full object-cover transition-opacity duration-700',
        isIntroInView ? 'opacity-60' : 'opacity-0 md:opacity-20'
    )

    return (
        <div className="relative isolate" style={{ height }}>
            <div className="sticky top-0 h-screen -z-10">
                <video
                    className={videoClass}
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
