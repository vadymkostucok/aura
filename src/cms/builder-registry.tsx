'use client'

import { builder, Builder } from '@builder.io/react'
import { AboutCard } from '@/components/About/AboutCard'
import { LibraryCard } from '@/components/Libraries/LibraryCard'
import { PodcastCard } from '@/components/Podcast/PodcastCard'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

Builder.registerComponent(AboutCard, {
    name: 'AboutCard',
    inputs: [
        { name: 'index', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'company', type: 'string' },
        { name: 'website', type: 'string' },
    ],
})

Builder.registerComponent(LibraryCard, {
    name: 'LibraryCard',
    inputs: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'company', type: 'string' },
        { name: 'platform', type: 'string' },
        { name: 'info', type: 'string' },
        { name: 'type', type: 'string' },
    ],
})

Builder.registerComponent(PodcastCard, {
    name: 'PodcastCard',
    inputs: [
        { name: 'date', type: 'string' },
        { name: 'title', type: 'string' },
    ],
})
