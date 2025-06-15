"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Background, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin, Send, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import RetroGrid from "@/components/ui/retro-grid";
import { Particles } from "@/components/ui/particles";
import { ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { IoClose, IoCalendarOutline } from 'react-icons/io5';

// Metadata must be in a separate server component or layout
// export const metadata = {
//   title: "Contact Us - LogiCore",
//   description: "Get in touch with our web development team to discuss your project needs.",
// };

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    companyWebsite: "",
    projectDetails: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const showScheduleMeetingPrompt = () => {
    toast(
      <div className="flex flex-col space-y-2">
        <h3 className="font-medium text-base">Need immediate assistance?</h3>
        <p className="text-sm text-muted-foreground">Schedule a quick meeting with our team.</p>
      </div>,
      {
        duration: 8000,
        icon: <IoCalendarOutline className="h-5 w-5 text-primary" />,
        action: {
          label: "Schedule Now",
          onClick: () => window.open("https://cal.com/logicore/30min", "_blank"),
        },
        closeButton: true,
        position: "top-right",
        className: "custom-toast-right",
        style: {
          position: 'relative',
        },
      }
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        // Show success toast
        toast.success("Message sent successfully!", {
          description: "Our team will reach out to you soon.",
          duration: 5000,
          icon: <CheckCircle className="h-4 w-4 text-green-500" />,
          closeButton: false,
          position: "top-right",
          className: "custom-toast-right",
          style: {
            position: 'relative',
          },
        });
        
        // Reset the form
        setForm({
          name: "",
          email: "",
          businessType: "",
          companyWebsite: "",
          projectDetails: "",
        });
        
        // Redirect to home page after successful submission
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or contact us directly.",
          duration: 5000,
          closeButton: true,
          position: "top-right",
          className: "custom-toast-right",
          style: {
            position: 'relative',
          },
        });
        
        // Show schedule meeting prompt on error
        setTimeout(showScheduleMeetingPrompt, 1000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred", {
        description: "Please try again later or contact us directly.",
        duration: 5000,
        closeButton: true,
        position: "top-right",
        className: "custom-toast-right", 
        style: {
          position: 'relative',
        },
      });
      
      // Show schedule meeting prompt on error
      setTimeout(showScheduleMeetingPrompt, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Container className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-2/3">
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      Contact Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            placeholder="Your name" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                            className="bg-background/50 focus:bg-background/50"
                            style={{ backgroundColor: "rgba(var(--background), 0.5)" }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your.email@example.com" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                            className="bg-background/50 focus:bg-background/50"
                            style={{ backgroundColor: "rgba(var(--background), 0.5)" }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Input 
                          id="businessType" 
                          placeholder="e.g. Real Estate, eCommerce" 
                          value={form.businessType} 
                          onChange={handleChange} 
                          required 
                          className="bg-background/50 focus:bg-background/50"
                          style={{ backgroundColor: "rgba(var(--background), 0.5)" }}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="companyWebsite">Company Website (Optional)</Label>
                        <Input 
                          id="companyWebsite" 
                          placeholder="https://yourcompany.com" 
                          value={form.companyWebsite} 
                          onChange={handleChange} 
                          className="bg-background/50 focus:bg-background/50"
                          style={{ backgroundColor: "rgba(var(--background), 0.5)" }}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="projectDetails">Project Details</Label>
                        <Textarea 
                          id="projectDetails" 
                          placeholder="Tell us about your project and requirements" 
                          className="min-h-[150px] bg-background/50 focus:bg-background/50" 
                          value={form.projectDetails} 
                          onChange={handleChange} 
                          required 
                          style={{ backgroundColor: "rgba(var(--background), 0.5)" }}
                        />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Button 
                          type="submit" 
                          className="w-full sm:w-auto" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                        <Button asChild variant="outline" className="w-full sm:w-auto">
                          <Link href="https://cal.com/logicore/30min" target="_blank" rel="noopener noreferrer">
                            <Calendar className="mr-2 h-4 w-4" /> Schedule a Meet
                          </Link>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-full lg:w-1/3">
                <div className="sticky top-32 space-y-6">
                  <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Email Us</h3>
                            <p className="text-sm text-muted-foreground mt-1">info@thelogicore.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Call Us</h3>
                            <p className="text-sm text-muted-foreground mt-1">+91 9876543210</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Visit Us</h3>
                            <p className="text-sm text-muted-foreground mt-1">Andheri West, Mumbai</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Quick Consultation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Need a quick answer to your web development questions? Schedule a free 30-minute consultation.
                        </p>
                        <Button asChild className="w-full">
                          <Link href="https://cal.com/logicore/30min" target="_blank">
                            Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
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
                  Ready to start your project?
                </h2>
                <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-4">
                  Let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mt-6">
                  <Button asChild size="lg" className="w-full sm:w-max">
                    <Link href="https://cal.com/logicore/30min" target="_blank">
                      Schedule a Call
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