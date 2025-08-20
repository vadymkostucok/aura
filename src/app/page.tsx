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

export default function Home() {
    return (
        <>
            <Loader />
            <Header />
            <VideoScrollWrapper>
                <Intro />
                <About />
                <Libraries />
                <Podcast />
                <Report />
            </VideoScrollWrapper>
            <Contact />
            <Footer />
        </>
    )
}
