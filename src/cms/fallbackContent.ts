// about
import happyEmoji from '@/assets/emoji-happy.svg'
import keyEmoji from '@/assets/key.svg'
import ghostEmoji from '@/assets/ghost.svg'
import heartEmoji from '@/assets/heart.svg'

// podcast
import podcast1 from '@/assets/podcast1.png'
import podcast2 from '@/assets/podcast2.png'
import podcast3 from '@/assets/podcast3.png'

// library
import cam from '@/assets/cam.svg'
import link from '@/assets/link.svg'
import save from '@/assets/save.svg'
import check from '@/assets/checkAlt.svg'

export const aboutSectionCards = [
    {
        index: '01',
        title: 'Vibe Coders...',
        icon: happyEmoji,
        description: [
            'You’re creating code in seconds. You’re also creating security threats in seconds.',
            'Check out the Vibe section in Resources to learn best practices and get free tools to help secure your Vibe code.',
        ],
    },
    {
        index: '02',
        title: 'New to Cybersecurity',
        icon: keyEmoji,
        description: [
            'The cybersecurity world is daunting for just about anyone. We’ll teach you the basics, vocabulary, and provide useful tools in the Beginners section in Resources.',
        ],
    },
    {
        index: '03',
        title: 'Want Fed/DoD customers',
        icon: ghostEmoji,
        description: [
            'So you want to sell your technology to federal agencies and the Department of Defense. We’ll give you tools and information to help guide you through the cybersecurity requirements.',
        ],
    },
    {
        index: '04',
        title: 'IT Cybersecurity trainers',
        icon: heartEmoji,
        description: [
            'So you want to sell your technology to federal agencies and the Department of Defense. We’ll give you tools and information to help guide you through the cybersecurity requirements.',
        ],
    },
]

export const podcastSectionCards = [
    {
        date: 'July 26, 2025',
        icon: podcast1,
        title: 'Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via Science',
    },
    {
        date: 'July 26, 2025',
        icon: podcast2,
        title: 'How do I know my Vibe app is secure?',
        author: 'Colin Gounden',
        position: 'CEO of Via Science',
    },
    {
        date: 'July 26, 2025',
        icon: podcast3,
        title: 'Securing Vibe Coded Apps',
        author: 'Colin Gounden',
        position: 'CEO of Via Science',
    },
]

export const librarySectionCards = [
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
