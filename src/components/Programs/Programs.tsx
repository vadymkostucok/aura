import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1, H3, H4, P } from '../Typography'

const mapConfig = [
    {
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
                <H1>Index of popular cybersecurity programs</H1>
                <H1>ICON</H1>
            </FlexContainer>
            <FlexContainer direction="flex-col">
                {mapConfig.map((card, index) => (
                    <FlexContainer
                        key={index}
                        direction="flex-col"
                        className="bg-black border border-gray-700"
                    >
                        <H3>{card.title}</H3>
                        <H4 className="text-green-300">{card.subtitle}</H4>
                        {card.description}
                        <P>Top skills you gain</P>
                        <FlexContainer justifyContent="justify-between">
                            <div className="grid grid-cols-2">
                                {card.skills.map((skill, index) => (
                                    <FlexContainer
                                        key={index}
                                        alignItems="items-center"
                                    >
                                        <div className="bg-green-300 w-2 h-2" />
                                        {skill}
                                    </FlexContainer>
                                ))}
                            </div>
                            <button className="bg-yellow-300 text-black px-5 py-2.5">
                                Learn more
                            </button>
                        </FlexContainer>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </FlexContainer>
    )
}
