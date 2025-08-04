'use client'
import React from 'react'
import { FlexContainer } from './FlexContainer'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import errorIcon from '@/assets/errorIcon.svg'

type InputProps = {
    id: string
    label: string
    hasDisclaimer?: boolean
    error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            name,
            type,
            placeholder,
            hasDisclaimer = false,
            error,
            ...inputProps
        },
        ref
    ) => {
        const renderDisclaimer = hasDisclaimer ? (
            <p className="text-[13px] leading-5">
                <span className="opacity-50">
                    {
                        "By clicking 'Send Message' you're confirming that you agree with our"
                    }
                </span>{' '}
                <span className="underline cursor-pointer opacity-50 hover:text-[#fff] hover:opacity-100 duration-500">
                    Terms and Conditions.
                </span>
            </p>
        ) : null

        return (
            <FlexContainer direction="flex-col" gap="gap-2.5">
                <label htmlFor={name} className="uppercase text-[11px]">
                    {label}
                    <span className="text-[#21D7A6]">*</span>
                </label>
                <input
                    id={id}
                    name={name}
                    type={type}
                    ref={ref}
                    placeholder={placeholder}
                    className={twMerge(
                        'bg-[#ffffff09] p-4 outline-none border border-transparent transition-colors duration-300',
                        error && 'border-[#F72B68]'
                    )}
                    {...inputProps}
                />
                {error && (
                    <span className="text-[#F72B68] uppercase text-[11px] md:text-[13px] flex gap-2 items-center">
                        <Image src={errorIcon} alt="error icon" />
                        {error}
                    </span>
                )}
                {renderDisclaimer}
            </FlexContainer>
        )
    }
)

Input.displayName = 'Input'
