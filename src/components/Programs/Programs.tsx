import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography'
import { ProgramsCard } from './ProgramsCard'

const mapConfig = [
    {
        type: 'PR-02_£399.00 GBP',
        complexity: 'junior',
        title: 'SOC BTL1 Junior',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            "Once you've completed all 6 of our introduction courses, you can claim your BTJA certificate of completion here!",
        skills: [
            'Redline',
            'Indicators of Compromise',
            'IOC Editor',
            'Indicators of Attack',
        ],
    },
    {
        type: 'PR-02_£399.00 GBP',
        complexity: 'junior',
        title: 'SOC BTL1 Junior',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            "Once you've completed all 6 of our introduction courses, you can claim your BTJA certificate of completion here!",
        skills: [
            'Redline',
            'Indicators of Compromise',
            'IOC Editor',
            'Indicators of Attack',
        ],
    },
]

export const Programs = () => {
    return (
        <FlexContainer className="px-10 py-10">
            <FlexContainer direction="flex-col" gap="gap-16">
                <H2>Index of popular cybersecurity programs</H2>
                <H2>ICON</H2>
            </FlexContainer>
            <FlexContainer direction="flex-col" gap="gap-6">
                {mapConfig.map((card, index) => (
                    <ProgramsCard
                        key={index}
                        type={card.type}
                        complexity={card.complexity}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        skills={card.skills}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    )
}
