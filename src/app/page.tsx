import { Intro } from '@/components/Intro/Intro'
import { Podcast } from '@/components/Podcast/Podcast'
import { About } from '@/components/About/About'
import { Report } from '@/components/Report/Report'
import { Libraries } from '@/components/Libraries/Libraries'
import { Contact } from '@/components/Contact/Contact'
import { VideoScrollWrapper } from '@/components/Video'
import { Header } from '@/components/Header/Header'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { retryBuilderFetch } from '@/utils/retryBuilderFetch'

export default async function Home() {
    const about = await retryBuilderFetch('about-cards', {
        userAttributes: { urlPath: '/' },
    })
    const resources = await retryBuilderFetch('resources-cards', {
        userAttributes: { urlPath: '/' },
    })
    const news = await retryBuilderFetch('news-cards', {
        userAttributes: { urlPath: '/' },
    })
    const events = await retryBuilderFetch('events-cards', {
        userAttributes: { urlPath: '/' },
    })

    const aboutCards = about?.data?.cards ?? []
    const resourcesCards = resources?.data?.cards ?? []
    const newsCards = news?.data?.cards ?? []
    const eventCards = events?.data?.cards ?? []

    return (
        <>
            <Loader />
            <Header />
            <VideoScrollWrapper>
                <Intro />
                <About cardsData={aboutCards} />
                <Libraries cardsData={resourcesCards} />
                <Podcast newsData={newsCards} eventsData={eventCards} />
                <Report />
            </VideoScrollWrapper>
            <Contact />
            <Footer />
        </>
    )
}
