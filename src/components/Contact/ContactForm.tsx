import React, { useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import {
    TypographyButton,
    TypographyButtonHandle,
} from '../Typography/TypographyButton'
import { LottieAnimation } from '../LottieAnimation'

import singleArrow from '@/assets/singleArrowBlack.json'
import singleArrowGreen from '@/assets/singleArrowGreen.json'
import { Input } from '../Input'
import { easeOut, motion } from 'framer-motion'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const friendlyPhoneRegex = /^\+?[0-9\s\-()]{7,20}$/

export const contactFormSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z
        .string()
        .regex(
            friendlyPhoneRegex,
            'Invalid phone number (digits, +, (), - allowed)'
        ),
})
export type ContactFormValues = z.infer<typeof contactFormSchema>

const slideUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
}

const MotionFlexContainer = motion(FlexContainer)

type ContactFormProps = {
    onSubmitSuccess?: () => void
}

export const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
    const textRef = useRef<TypographyButtonHandle>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = (data: ContactFormValues) => {
        console.log('Form data:', data)
        reset()
        onSubmitSuccess?.()
    }
    return (
        <MotionFlexContainer
            variants={slideUp}
            width="w-full lg:w-[550px]"
            direction="flex-col"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-6 pt-5 items-start"
            >
                <Input
                    id="email"
                    type="email"
                    placeholder="via@security.com"
                    label="Email"
                    {...register('email')}
                    error={errors.email?.message}
                />

                <button
                    onMouseEnter={() => textRef.current?.replay()}
                    onMouseLeave={() => textRef.current?.replay()}
                    type="submit"
                    className="group shrink-0 bg-[#21D7A6] hover:bg-transparent uppercase text-black hover:text-[#21D7A6] hover:border hover:border-[#21D7A6] rounded-[2px] text-left p-4.5 mt-[26.5px] mb-0.5 duration-500"
                >
                    <FlexContainer
                        gap="gap-2.5"
                        justifyContent="justify-between"
                    >
                        <TypographyButton ref={textRef} disableInternalHover>
                            Sign Up
                        </TypographyButton>
                        <LottieAnimation
                            animationData={singleArrow}
                            className="group-hover:hidden block w-3.5 md:w-5"
                        />
                        <LottieAnimation
                            animationData={singleArrowGreen}
                            className="group-hover:block hidden w-3.5 md:w-5"
                        />
                    </FlexContainer>
                </button>
            </form>
        </MotionFlexContainer>
    )
}
