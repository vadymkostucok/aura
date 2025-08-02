import React from 'react'
import { FlexContainer } from './FlexContainer'

type InputProps = {
    id: string
    label: string
    hasDisclaimer?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({
    id,
    label,
    name,
    type,
    placeholder,
    hasDisclaimer = false,
    ...inputProps
}: InputProps) => {
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
                type={type}
                name={name}
                placeholder={placeholder}
                className="bg-[#ffffff09] p-4"
                {...inputProps}
            />
            {renderDisclaimer}
        </FlexContainer>
    )
}
