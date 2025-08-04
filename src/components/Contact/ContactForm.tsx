import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/Typography'
import { TypographyButton } from '../Typography/TypographyButton'
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
            width="w-full lg:w-[530px]"
            direction="flex-col"
            className="bg-[#FFFFFF1A] lg:bg-[#FFFFFF05] border border-[#ffffff10] rounded-[2px] px-5 py-8"
        >
            <H3 className="text-[#FFF973]">Apply Now</H3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 pt-5"
            >
                <Input
                    id="fullName"
                    type="text"
                    placeholder="Your Full Name"
                    label="Name"
                    {...register('fullName')}
                    error={errors.fullName?.message}
                />

                <Input
                    id="email"
                    type="email"
                    placeholder="aura@security.com"
                    label="Email Address"
                    {...register('email')}
                    error={errors.email?.message}
                />

                <Input
                    id="phone"
                    type="tel"
                    placeholder="+31 6 12 34 56 78"
                    label="Phone"
                    hasDisclaimer
                    {...register('phone')}
                    error={errors.phone?.message}
                />

                <button
                    type="submit"
                    className="group bg-[#21D7A6] hover:bg-transparent uppercase text-black hover:text-[#21D7A6] hover:border hover:border-[#21D7A6] rounded-[2px] text-left p-4 duration-500"
                >
                    <FlexContainer
                        gap="gap-2.5"
                        justifyContent="justify-between"
                    >
                        <TypographyButton>Submit</TypographyButton>
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
