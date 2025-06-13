import { Background, Companies, Connect, Container, CTA, Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import AnimatedFeatures from "@/components/main/features";
import { Spotlight } from "@/components/ui/spotlight";
import { generateMetadata } from "@/functions/metadata";
import MarketingLayout from "./(main)/layout";
import MarketingPage from "./(main)/page";

export const metadata = generateMetadata({
  title: "LogiCore - Web Development Agency",
  description: "Expert web development solutions for businesses of all sizes. We create beautiful, functional websites that drive results.",
});

export default function HomePage() {
    return (
        <MarketingLayout>
            <MarketingPage />
        </MarketingLayout>
    )
} 