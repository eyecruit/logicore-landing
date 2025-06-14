import { Background, Container, Wrapper, CTA } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionBadge } from "@/components/ui/section-bade";
import { generateMetadata } from "@/functions/metadata";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import RetroGrid from "@/components/ui/retro-grid";
import { Particles } from "@/components/ui/particles";
import { IoHome, IoKey, IoPeople, IoHelpCircle, IoCall } from 'react-icons/io5';

export const metadata = generateMetadata({
  title: "SEO Guide - LogiCore",
  description: "Learn why SEO is essential for your business in 2025 and how our strategies can help your website rank better on Google.",
});

export default function SEOGuidePage() {
  return (
    <>
    <Background>
      <RetroGrid className="fixed inset-0 w-full h-full" />
        <Particles
          refresh
          ease={100}
          color="#d4d4d8"
          quantity={1000}
          className="fixed inset-0 z-0"
        />
      <Wrapper className="py-20 relative pt-40">
        <Container>
          <div className="text-center mb-16">

              <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4">Why SEO Is Essential for Every Business in 2025</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                In today's digital world, your website is your <span className="font-medium text-foreground">first impression</span> — and without SEO, your customers might never find you.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-12">
              <div className="w-full md:w-2/3">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg">
                    At <span className="font-bold">LogiCore</span>, we help businesses build and redesign websites that don't just look great, but also <span className="font-medium text-primary">Rank on Google</span>. Here's a quick summary every business owner should know about SEO — and why it's critical for your success.
                  </p>

                  <div className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      <IoHome className="h-6 w-6 text-primary inline-block mr-2" />
                      What Is SEO and Why It Matters
                    </h2>
                    <p>
                      SEO (Search Engine Optimization) means making your website easy to find on Google. It's how new customers discover your business online <em>without paid ads</em>.
                    </p>

                    <h3 className="text-xl font-bold mt-8 mb-4">Benefits for Your Business:</h3>
                    <ul className="space-y-2">
                      {[
                        "More website visitors → More leads → More sales",
                        "Build credibility and trust",
                        "Save money on paid advertising"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6">
                      If you're a local service provider, ecommerce brand, or any business with a website — SEO is <span className="font-bold">not optional</span>.
                    </p>
                  </div>

                  <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      <IoKey className="h-6 w-6 text-primary inline-block mr-2" />
                      The 7 Essentials of a High-Ranking Website
                    </h2>
                    <p className="mb-6">
                      At LogiCore, we implement all of these on every website we build or redesign:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                        <CardHeader>
                          <CardTitle>1. Keyword Targeting</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>We use the right keywords that match what your customers are searching for, like:</p>
                          <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                            <li>"Best digital marketing agency in Mumbai"</li>
                            <li>"Affordable plumbing services in UAE"</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                        <CardHeader>
                          <CardTitle>2. Smart Website Structure</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Simple, clear pages that are easy to navigate on both desktop and mobile.</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                        <CardHeader>
                          <CardTitle>3. On-Page SEO</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Every page is optimized with proper titles, image descriptions, headings, and compelling content.</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                        <CardHeader>
                          <CardTitle>4. Technical Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>We make your site fast, mobile-friendly, and error-free. Google loves that.</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                        <CardHeader>
                          <CardTitle>5. Authority Building</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>We help build backlinks (links from other sites) that boost your trust and rankings.</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                        <CardHeader>
                          <CardTitle>6. Local SEO</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>If you serve a location, we optimize your Google Business profile and local visibility.</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm md:col-span-2 bg-primary/5">
                        <CardHeader>
                          <CardTitle>7. Performance Tracking</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>We use tools to monitor your traffic and improve continuously.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      <IoPeople className="h-6 w-6 text-primary inline-block mr-2" />
                      Why Businesses Choose LogiCore
                    </h2>
                    <div className="space-y-6">
                      {[
                        "We redesign outdated websites to make them fast, SEO-friendly, and high-converting.",
                        "We manage your SEO long-term so you don't need to hire in-house experts.",
                        "We help your brand get found by the right audience — consistently."
                      ].map((reason, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                          <div className="bg-primary/10 rounded-full p-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <p>{reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      <IoCall className="h-6 w-6 text-primary inline-block mr-2" />
                      Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">How long does it take to see SEO results?</AccordionTrigger>
                        <AccordionContent>
                          Most businesses see ranking improvements in less than 90 days with our strategies. However, SEO is a long-term investment that continues to deliver results over time.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">Is SEO better than paid advertising?</AccordionTrigger>
                        <AccordionContent>
                          SEO provides sustainable, long-term results without ongoing ad costs. While paid ads can deliver immediate traffic, SEO builds lasting organic visibility that continues working for you.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">Do you offer SEO for all industries?</AccordionTrigger>
                        <AccordionContent>
                          Yes, our SEO strategies work for all industries. We customize our approach based on your specific market, competition, and business goals.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium">What makes your SEO services different?</AccordionTrigger>
                        <AccordionContent>
                          We combine technical SEO expertise with content strategy and user experience optimization. Our holistic approach ensures your website not only ranks well but also converts visitors into customers.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="sticky top-32">
                  <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Want More Leads from Google?</CardTitle>
                      <CardDescription>
                        Let's audit your current website and show you where it's losing traffic and how we can fix it.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Most businesses see a ranking improvement in <span className="font-bold text-foreground">less than 90 days</span> with our strategies.
                        </p>
                        <Button asChild className="w-full">
                          <Link href="https://cal.com/logicore/30min" target="_blank">
                            Get Your Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Container>

          <Container className="mt-20">
            <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[300px] border border-foreground/10 rounded-3xl overflow-hidden relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
              <div className="flex flex-col items-center justify-center w-full z-20">
                <h2 className="text-3xl md:text-4xl font-heading heading font-semibold !leading-tight">
                  Ready to boost your online visibility?
                </h2>
                <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-4">
                  Let us help you create an SEO strategy that drives real business results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mt-6">
                  <Button asChild size="lg" className="w-full sm:w-max">
                    <Link href="/contact">
                      Contact Us Today
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-max">
                    <Link href="/projects">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
          </div>
        </Container>
      </Wrapper>
    </Background>
    </>
  );
} 