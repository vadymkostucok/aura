import { Intro } from '@/components/Intro/Intro'
import { Podcast } from '@/components/Podcast/Podcast'
import { About } from '@/components/About/About'
import { Report } from '@/components/Report/Report'
import { Libraries } from '@/components/Libraries/Libraries'
import { Programs } from '@/components/Programs/Programs'
import { Form } from '@/components/Form/Form'
import { VideoScrollWrapper } from '@/components/Video'
import { Header } from '@/components/Header/Header'
import { Box } from '@/components/Box'
import { H5 } from '@/components/Typography'
import { FlexContainer } from '@/components/FlexContainer'

export default function Home() {
    return (
        <>
            <Box className="hidden xl:block">
                <Header />
                <VideoScrollWrapper>
                    <Intro />
                    <About />
                    <Podcast />
                    <Report />
                    <Libraries />
                    <Programs />
                </VideoScrollWrapper>
                <Form />
            </Box>
            <FlexContainer className="xl:hidden h-screen" center>
                <H5 className="capitalize">
                    {'Don’t Worry. '}
                    <span className="text-[#21D7A6]">
                        Mobile Version Coming Soon.
                    </span>
                </H5>
            </FlexContainer>
        </>
    )
}
