'use client'
import React from 'react'
import { useEffect, useState } from 'react'

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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: showLottie ? 1 : 0, opacity: 1 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        <Lottie animationData={loader} loop={false} autoplay />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
