import { Background, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateMetadata } from "@/functions/metadata";

export const metadata = generateMetadata({
  title: "Contact Us - LogiCore",
  description: "Get in touch with our web development team to discuss your project needs.",
});

export default function ContactPage() {
  return (
    <Background>
      <Wrapper className="py-20 relative pt-40">
        <Container className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground">
              Have a project in mind? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input id="company" placeholder="Your company name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="project">Project Details</Label>
              <Textarea 
                id="project" 
                placeholder="Tell us about your project and requirements" 
                className="min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
          
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@logicore.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Web Street, Digital City</p>
            </div>
          </div> */}
        </Container>
      </Wrapper>
    </Background>
  );
} 