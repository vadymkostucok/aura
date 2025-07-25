import React from 'react'
import { H1 } from '../Typography'
import { FlexContainer } from '../FlexContainer'
import { Card } from '../Card'

const configMap = [
    {
        index: 1,
        title: 'Vibe Coders',
        description:
            'You’re creating code in seconds. You’re also creating security threats in seconds. Check out the Vibe section in Resources to learn best practices and get free tools to help secure your Vibe code.',
    },
    {
        index: 2,
        title: 'Vibe Coders',
        description:
            'You’re creating code in seconds. You’re also creating security threats in seconds. Check out the Vibe section in Resources to learn best practices and get free tools to help secure your Vibe code.',
    },
    {
        index: 3,
        title: 'Vibe Coders',
        description:
            'You’re creating code in seconds. You’re also creating security threats in seconds. Check out the Vibe section in Resources to learn best practices and get free tools to help secure your Vibe code.',
    },
]

export const About = () => {
    return (
        <FlexContainer direction="flex-col" gap="gap-10" className="py-10">
            <FlexContainer center>
                <H1 className="capitalize">
                    {"Don't worry. "}
                    <span className="text-green-300">we got you.</span>
                </H1>
            </FlexContainer>
            <FlexContainer gap="gap-10" className="px-10">
                {configMap.map((card) => (
                    <Card
                        key={card.index}
                        index={card.index}
                        title={card.title}
                        description={card.description}
                        icon=""
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    )
}
