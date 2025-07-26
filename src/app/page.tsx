import { Intro } from '@/components/Intro/Intro'
import { Podcast } from '@/components/Podcast/Podcast'
import { About } from '@/components/About/About'
import { Report } from '@/components/Report/Report'
import { Libraries } from '@/components/Libraries/Libraries'
import { Programs } from '@/components/Programs/Programs'
import { Form } from '@/components/Form/Form'
import { VideoScrollWrapper } from '@/components/Video'

export default function Home() {
    return (
        <>
            <VideoScrollWrapper>
                <Intro />
                <About />
                <Podcast />
                <Report />
                <Libraries />
                <Programs />
            </VideoScrollWrapper>
            <Form />
        </>
    )
}
