import { Background, Container, Wrapper } from "@/components";
import { generateMetadata } from "@/functions/metadata";
import Image from "next/image";

export const metadata = generateMetadata({
  title: "About Us - LogiCore",
  description: "Learn about LogiCore, our team, our mission, and our approach to web development.",
});

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    image: "/images/dashboard.png",
    bio: "Alex has over 10 years of experience in web development and has worked with companies of all sizes."
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image: "/images/dashboard.png",
    bio: "Sarah specializes in creating beautiful, intuitive interfaces that engage users and drive conversions."
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Developer",
    image: "/images/dashboard.png",
    bio: "Michael is an expert in both frontend and backend technologies, with a focus on performance optimization."
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    image: "/images/dashboard.png",
    bio: "Emma ensures that all projects are delivered on time and exceed client expectations."
  }
];

export default function AboutPage() {
  return (
    <Background>
      <Wrapper className="py-20 relative">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About LogiCore</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're a team of passionate web developers and designers dedicated to creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At LogiCore, we believe that every business deserves a powerful online presence. Our mission is to create beautiful, functional websites that help our clients achieve their goals and stand out in the digital landscape.
              </p>
              <p className="text-muted-foreground">
                We combine technical expertise with creative design to deliver web solutions that not only look great but also perform exceptionally well. Whether you're a small startup or an established enterprise, we're committed to providing you with a website that reflects your brand and drives results.
              </p>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden border border-neutral-800">
              <Image
                src="/images/dashboard.png"
                alt="LogiCore team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/50">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every line of code we write and every design element we create is crafted with precision and care.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/50">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of web development trends and technologies to deliver cutting-edge solutions to our clients.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/50">
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, treating their projects as our own and ensuring their vision comes to life.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border border-neutral-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
    </Background>
  );
} 