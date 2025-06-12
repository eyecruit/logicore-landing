import { Background, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/functions/metadata";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Pricing - LogiCore",
  description: "Explore our transparent pricing plans for web development services.",
});

const pricingPlans = [
  {
    name: "Basic",
    price: 1499,
    description: "Perfect for small businesses just getting started online.",
    features: [
      "Responsive website design",
      "Up to 5 pages",
      "Contact form",
      "Basic SEO setup",
      "Mobile optimization",
      "Social media integration",
      "3 rounds of revisions",
      "2 weeks delivery"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 2999,
    description: "Ideal for growing businesses that need more functionality.",
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Content management system",
      "Blog setup",
      "Advanced SEO optimization",
      "Google Analytics integration",
      "E-commerce functionality (up to 20 products)",
      "Custom contact forms",
      "5 rounds of revisions",
      "4 weeks delivery"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 5999,
    description: "For established businesses with complex requirements.",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Custom web application development",
      "Advanced e-commerce (unlimited products)",
      "User authentication system",
      "Database integration",
      "API development",
      "Performance optimization",
      "Advanced security features",
      "Unlimited revisions",
      "8 weeks delivery"
    ],
    popular: false
  }
];

export default function PricingPage() {
  return (
    <Background>
      <Wrapper className="py-20 relative">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include hosting setup, domain configuration, and 30 days of post-launch support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg border ${plan.popular ? 'border-primary' : 'border-neutral-800'} p-8 relative ${plan.popular ? 'bg-primary/5' : 'bg-neutral-900/50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} 
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-lg border border-neutral-800 bg-neutral-900/50">
            <h2 className="text-2xl font-semibold mb-4">Need a custom solution?</h2>
            <p className="text-muted-foreground mb-6">
              We understand that every business has unique requirements. Contact us for a personalized quote tailored to your specific needs.
            </p>
            <Button asChild>
              <Link href="/contact">
                Request Custom Quote
              </Link>
            </Button>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer website maintenance?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer monthly maintenance packages to keep your website secure, updated, and running smoothly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What's your payment structure?</h3>
                <p className="text-muted-foreground">
                  We typically require a 50% deposit to begin work, with the remaining balance due upon project completion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you provide hosting services?</h3>
                <p className="text-muted-foreground">
                  We can set up hosting for you on premium providers like Vercel, Netlify, or AWS, but the hosting fees are separate from our development costs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity, but typically range from 2-8 weeks from start to finish.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Background>
  );
} 