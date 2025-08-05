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

export const programsSectionCards = [
    {
        type: 'PR-01_FREE',
        complexity: 'Entry-level',
        title: 'Google Cybersecurity Program',
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
        title: 'BTL1 SOC Cert',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            'BTL1 is designed to train technical defenders that are capable of defending networks and responding to cyber incidents. The skills and tools you’ll learn in this course will be directly applicable to a range of security roles, and are actively used by defenders around the world.',
        skills: [
            'ATT&CK',
            'Browser History Capturer',
            'Autopsy',
            'JumpList Explorer',
        ],
    },
    {
        type: 'PR-03_FREE',
        complexity: 'Entry-level',
        title: 'SOC BTL1 Junior',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            'Start your journey into network penetration testing by earning the Practical Junior Penetration Tester certification. Perform a pentest at an associate level to earn the certification and demonstrate your expertise to employers.',
        skills: [
            'Redline',
            'Indicators of Compromise',
            'IOC Editor',
            'Indicators of Attack',
        ],
    },
    {
        type: 'PR-04_£399.00 GBP',
        complexity: 'junior',
        title: 'TCM PJPT',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            'BTL1 is designed to train technical defenders that are capable of defending networks and responding to cyber incidents. The skills and tools you’ll learn in this course will be directly applicable to a range of security roles, and are actively used by defenders around the world.',
        skills: [
            'ATT&CK',
            'Browser History Capturer',
            'Autopsy',
            'JumpList Explorer',
        ],
    },
    {
        type: 'PR-05_£399.00 GBP',
        complexity: 'junior',
        title: 'TryHackMe SAL1',
        subtitle:
            'Lessons available in 9 languages with native text-to-speech (beta)',
        description:
            'Stand out with Security Analyst Level 1 (SAL1). An entry-level, hands-on security analyst certification built by industry experts. Prove your skills, showcase real-world experience, and launch your cyber security career.',
        skills: [
            'Verifiable certificate',
            'Instant results',
            'Gain a competitive edge',
            'Share achievement with future employers',
        ],
    },
]
