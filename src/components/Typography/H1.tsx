'use client'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import plusIcon from '@/assets/plus.svg'

type H1Props = {
    children: string // assume string only, since you're animating letters
    className?: string
}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
    ({ children, className = '' }, ref) => {
        return (
            <motion.h1
                ref={ref}
                className={`${className} font-violet scroll-m-20 text-[130px] md:text-[186px] leading-[1.1] tracking-tight relative flex uppercase overflow-hidden`}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                    hidden: {},
                }}
            >
                <Image
                    src={plusIcon}
                    alt="plus icon"
                    className="absolute -top-10 left-0"
                />
                {children.split('').map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            hidden: { y: '100%' },
                            visible: {
                                y: '0%',
                                transition: {
                                    duration: 0.6,
                                    ease: [0.42, 0, 0.58, 1],
                                },
                            },
                        }}
                        className="inline-block"
                    >
                        {letter}
                    </motion.span>
                ))}
                <Image
                    src={plusIcon}
                    alt="plus icon"
                    className="absolute -top-10 right-0"
                />
            </motion.h1>
        )
    }
)

H1.displayName = 'H1'
