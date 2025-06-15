
* Backend API: `/api/emails` using Nodemailer
* Updated form with new fields (`businessType`, `companyWebsite`, etc.)
* Send email to your address
* On success: refresh the form and redirect to `/`
* “Schedule a Meet” button linking to `https://cal.com/logicore`

---

### 💻 Cursor Prompt: Send Email via Nodemailer in Next.js

````prompt
🧩 TASK: Implement form email sending using Nodemailer and add a "Schedule a Meet" link

🔧 Backend Setup:
1. Create a file: `app/api/emails/route.ts`
2. In this file:
   - Create a `POST` handler.
   - Use `Nodemailer` to send the email to your internal email like `info@thelogicore.com`
   - Accept: `name`, `email`, `businessType`, `companyWebsite` (optional), `projectDetails`
   - Return `200 OK` on success

3. Install nodemailer:
```bash
npm install nodemailer
````

📩 Sample `/api/emails/route.ts`:

```ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, businessType, companyWebsite, projectDetails } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL || "info@thelogicore.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Website:</strong> ${companyWebsite || "Not Provided"}</p>
        <p><strong>Project Details:</strong><br/>${projectDetails}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return new NextResponse("Email failed", { status: 500 });
  }
}
```

🧠 Setup Environment Variables:
In `.env.local`:

```env
SMTP_EMAIL=logicore3@gmail.com
SMTP_PASSWORD=jmepsnlfcrsodrcg
use ssl port for safety 
```

---

🧩 Frontend: Update the form

Update the form in `ContactPage`:

1. Add state and submission logic
2. Replace `form` with a real submission handler
3. Redirect to `/` on success

📥 Updated JSX: 

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    companyWebsite: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", email: "", businessType: "", companyWebsite: "", projectDetails: "" });
      router.push("/");
    } else {
      alert("Failed to send email.");
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Input id="businessType" placeholder="e.g. Real Estate, eCommerce" value={form.businessType} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Company Website (Optional)</Label>
              <Input id="companyWebsite" placeholder="https://yourcompany.com" value={form.companyWebsite} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails">Project Details</Label>
              <Textarea id="projectDetails" placeholder="Tell us about your project and requirements" className="min-h-[150px]" value={form.projectDetails} onChange={handleChange} required />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Button type="submit" className="w-full md:w-auto">Send Message</Button>
              <a href="https://cal.com/logicore" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">
                Schedule a Meet →
              </a>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@thelogicore.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 9876543210</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Andheri West, Mumbai</p>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Background>
  );
}
```

---

Would you like me to export this as a full code file for your repo or generate the API file (`emails/route.ts`) directly into your editor for Cursor?
