import { Background, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateMetadata } from "@/functions/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "The Ultimate SEO Guide - LogiCore",
  description: "Our comprehensive SEO guide for business websites in 2025. Learn how to optimize your website for search engines and improve your online visibility.",
});

export default function SEOGuidePage() {
  return (
    <Background>
      <Wrapper className="py-20 relative pt-40">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">The Ultimate SEO Guide Every Business Website Needs in 2025</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you're running a business in 2025 and your website isn't showing up on Google, you're already behind. Whether you're building a website for the first time or redesigning an old one, SEO (Search Engine Optimization) is non-negotiable.
            </p>
          </div>

          <div className="mb-12 bg-card/5 p-6 rounded-lg border border-neutral-800">
            <p className="text-lg">
              At <span className="font-bold">LogiCore</span>, we build and revamp websites <em>with SEO built-in</em> — and here's the guide we use to ensure our clients' websites don't just look great, but also rank higher.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 heading">Why SEO Matters for Every Business</h2>
            <p className="mb-4">SEO drives <strong>organic traffic</strong>, which means:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You get <em>free leads</em> from Google.</li>
              <li>You build <strong>trust</strong> and <strong>brand authority</strong>.</li>
              <li>You don't need to rely only on ads.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 heading">Step-by-Step SEO Checklist for Every Business Website</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-neutral-900/50">
                <CardHeader>
                  <CardTitle>🔑 Keyword Research (The Foundation)</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">What to do:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Use tools like <strong>Google Keyword Planner</strong>, <strong>Ubersuggest</strong>, or <strong>Ahrefs</strong>.</li>
                    <li>Focus on <strong>buyer intent</strong> keywords like "best plumber in Dubai" or "affordable website redesign in Mumbai".</li>
                  </ul>
                  <p className="mt-4 text-primary"><strong>Pro tip:</strong> Don't chase only high-volume keywords — long-tail keywords convert better.</p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50">
                <CardHeader>
                  <CardTitle>📋 Structure Your Website Properly</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Must-haves:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Clear navigation</strong>: Home, Services, About, Contact.</li>
                    <li><strong>Dedicated service pages</strong>: One page per service.</li>
                    <li><strong>Mobile-friendly</strong> layout.</li>
                  </ul>
                  <h4 className="font-medium mt-4 mb-2">SEO Boosters:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Use <strong>breadcrumb navigation</strong>.</li>
                    <li>Add an <strong>HTML sitemap</strong> for search engines.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-neutral-900/50">
                <CardHeader>
                  <CardTitle>📝 On-Page SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">On every page:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Unique <strong>meta title</strong> (under 60 chars).</li>
                    <li>Descriptive <strong>meta description</strong> (under 160 chars).</li>
                    <li>Use <strong>H1, H2, H3</strong> properly.</li>
                    <li>Add <strong>alt text</strong> to images.</li>
                  </ul>
                  <h4 className="font-medium mt-4 mb-2">Content Tips:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Use your target keyword in the <strong>first 100 words</strong>.</li>
                    <li>Keep content <strong>helpful</strong>, not stuffed with keywords.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50">
                <CardHeader>
                  <CardTitle>⚙️ Technical SEO (Don't Skip This)</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Essential tech checks:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Secure site with <strong>HTTPS</strong>.</li>
                    <li>Fast loading time (under 3 seconds).</li>
                    <li>Mobile responsiveness.</li>
                    <li>No broken links or 404s.</li>
                    <li>XML sitemap + Robots.txt</li>
                  </ul>
                  <p className="mt-4"><strong>Tools:</strong> Google Search Console, GTmetrix, PageSpeed Insights</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-neutral-900/50">
                <CardHeader>
                  <CardTitle>🔗 Build Authority with Backlinks</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">How to get backlinks:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>List your business on <strong>directories</strong> (Google Business, Yelp, etc.).</li>
                    <li>Write <strong>guest posts</strong> on relevant blogs.</li>
                    <li>Share on <strong>LinkedIn</strong>, <strong>Medium</strong>, etc.</li>
                    <li>Ask for links from <strong>partners or vendors</strong>.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50">
                <CardHeader>
                  <CardTitle>🗘️ Local SEO (If you serve a location)</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Local SEO essentials:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Create and verify your <strong>Google Business Profile</strong>.</li>
                    <li>Add <strong>NAP (Name, Address, Phone)</strong> to the footer of every page.</li>
                    <li>Get <strong>local reviews</strong> on Google and other platforms.</li>
                    <li>Use local keywords: "web designer in Navi Mumbai".</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-neutral-900/50 mb-8">
              <CardHeader>
                <CardTitle>📈 Track, Analyze, Improve</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Free tools you need:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Google Analytics 4</strong>: Understand user behavior.</li>
                  <li><strong>Google Search Console</strong>: Monitor rankings & fix errors.</li>
                  <li><strong>Hotjar / Clarity</strong>: Visualize where users click.</li>
                </ul>
                <h4 className="font-medium mt-4 mb-2">Measure things like:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Which keywords bring traffic?</li>
                  <li>What pages have high bounce rates?</li>
                  <li>Which services get the most leads?</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 heading">Bonus: SEO Tips When Redesigning a Website</h2>
            <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
              <p className="mb-4">If you're revamping an old site:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Keep old URLs where possible (or 301 redirect them).</li>
                <li>Don't lose valuable content — update and optimize it.</li>
                <li>Test new designs for speed & mobile usability.</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 heading">Final Thoughts</h2>
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
              <p className="text-lg mb-4">Your website is your digital salesperson. If it's not optimized for search engines, you're missing out on real, high-intent customers.</p>
              <p className="text-lg">At <strong>LogiCore</strong>, we build SEO-friendly websites and help businesses <strong>redesign with results</strong> in mind. Whether you're starting fresh or upgrading, let us help you <em>build smarter</em>.</p>
            </div>
          </section>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to improve your website's SEO?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss how we can help you achieve better search rankings with a custom web solution.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </Container>
      </Wrapper>
    </Background>
  );
} 