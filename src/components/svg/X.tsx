import React from 'react'

type XProps = {
    className?: string
}

export const X = ({ className }: XProps) => {
    return (
        <svg
            className={`${className} w-5 text-white group-hover:text-[#fff973] duration-500`}
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.91358 0.463867H0.652344L6.89035 8.66043L1.05139 15.5363H3.74916L8.16536 10.3359L12.0868 15.4886H17.348L10.9288 7.0538L10.9401 7.06834L16.4672 0.559618H13.7694L9.6649 5.39309L5.91358 0.463867ZM3.55646 1.89935H5.19435L14.4439 14.053H12.806L3.55646 1.89935Z"
                fill="currentColor"
            />
        </svg>
    )
}
