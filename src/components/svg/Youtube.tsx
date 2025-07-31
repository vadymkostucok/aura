import React from 'react'

type YoutubeProps = {
    className?: string
}

export const Youtube = ({ className }: YoutubeProps) => {
    return (
        <svg
            className={`${className} w-5 text-white group-hover:text-[#fff973] duration-500`}
            width="19"
            height="13"
            viewBox="0 0 19 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.9053 0C17.6192 0.000156087 19 1.53845 19 3.43066V9.56934C19.0068 11.4691 17.6191 12.9998 15.9053 13H3.09473C1.38088 12.9999 0.000110313 11.4615 0 9.56934V3.43066C0 1.53075 1.38775 0.000140681 3.09473 0H15.9053ZM7.47168 9.55762L12.8604 6.40332L7.47168 3.25V9.55762Z"
                fill="currentColor"
            />
        </svg>
    )
}
