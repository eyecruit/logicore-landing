import { Background, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/functions/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Our Projects - LogiCore",
  description: "Explore our portfolio of web development projects and see how we've helped businesses achieve their digital goals.",
});

const CaseStudies = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with advanced product filtering and secure payment processing.",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    image: "/images/dashboard.png",
  },
  {
    id: 2,
    title: "Corporate Website",
    description: "Modern corporate website with custom animations and integrated blog system.",
    tags: ["TypeScript", "Next.js", "Framer Motion", "Headless CMS"],
    image: "/images/dashboard.png",
  },
  {
    id: 3,
    title: "Real Estate Application",
    description: "Property listing platform with advanced search functionality and interactive maps.",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
    image: "/images/dashboard.png",
  },
  {
    id: 4,
    title: "Healthcare Portal",
    description: "Secure patient portal with appointment scheduling and medical record access.",
    tags: ["Vue.js", "Express", "PostgreSQL", "AWS"],
    image: "/images/dashboard.png",
  },
  {
    id: 5,
    title: "Educational Platform",
    description: "Interactive learning platform with course management and progress tracking.",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "/images/dashboard.png",
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    description: "Online ordering system with real-time order tracking and inventory management.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/images/dashboard.png",
  },
];

export default function CaseStudiesPage() {
  return (
    <Background>
      <Wrapper className="py-20 relative pt-40">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of web development case studies that showcase our expertise in creating beautiful, functional, and high-performing websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CaseStudies.map((project) => (
              <div key={project.id} className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/case-studies/${project.id}`}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to start your project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss how we can help you achieve your digital goals with a custom web solution.
            </p>
            <Button asChild>
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