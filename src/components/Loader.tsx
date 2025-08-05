'use client'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { AnimatePresence, motion } from 'framer-motion'
import loader from '@/assets/loader.json'

export const Loader = () => {
    const [showLottie, setShowLottie] = useState(true)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLottie(false)
        }, 2500)

        const finishTimer = setTimeout(() => {
            setIsVisible(false)
        }, 2500 + 300)

        return () => {
            clearTimeout(timer)
            clearTimeout(finishTimer)
        }
    }, [])

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isVisible])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{
                            scale: showLottie ? 1 : 0,
                            opacity: 1,
                        }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 12,
                                ease: 'linear',
                            }}
                        >
                            <Lottie
                                animationData={loader}
                                loop={false}
                                autoplay
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
