import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/Typography'
import { LibraryCard } from './LibraryCard'

import cam from '@/assets/cam.svg'
import link from '@/assets/link.svg'
import save from '@/assets/save.svg'
import check from '@/assets/checkAlt.svg'

const mapConfig = [
    { description: 'Cybersecurity 101', type: 'video', icon: cam },
    {
        description: 'Cybersecurity for new Vibe Coders',
        type: 'video',
        icon: cam,
    },
    { description: 'Viber Coder Security', type: 'checklist', icon: check },
    {
        description: 'Prompts to ensure your code is secure',
        type: 'pdf document',
        icon: save,
    },
    {
        description: 'Security libraries for Vibe Coders',
        type: 'links',
        icon: link,
    },
    {
        description: 'Intro to Compliance for Vibe Coders',
        type: 'video',
        icon: cam,
    },
]

export const Libraries = () => {
    return (
        <FlexContainer className="pt-24 md:pt-36 px-5" center>
            <FlexContainer
                width="w-full max-w-[1200px]"
                direction="flex-col"
                gap="gap-10"
                center
            >
                <H2 fontSize="text-5xl" className="text-center">
                    Library for Vibe Coders
                </H2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {mapConfig.map((card, index) => (
                        <LibraryCard
                            key={index}
                            type={card.type}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </FlexContainer>
        </FlexContainer>
    )
}
