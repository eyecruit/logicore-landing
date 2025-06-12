import { Background, Companies, Connect, Container, CTA , Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import AnimatedFeatures from "@/components/marketing/features";
import { Spotlight } from "@/components/ui/spotlight";
import { generateMetadata } from "@/functions/metadata";

export const metadata = generateMetadata({
  title: "LogiCore - Web Development Agency",
  description: "Expert web development solutions for businesses of all sizes. We create beautiful, functional websites that drive results.",
});

export default function HomePage() {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                {/* <Container className="py-8 lg:py-20">
                    <Companies />
                </Container> */}
                {/* <Connect /> */}
                <AnimatedFeatures /> {/*  What we do */}
                <Perks /> {/* Services */}
                <Pricing />
                <Reviews />
                <CTA />
            </Wrapper>
        </Background>
    )
}
