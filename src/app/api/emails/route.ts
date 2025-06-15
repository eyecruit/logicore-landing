import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, businessType, companyWebsite, projectDetails } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL || "logicore3@gmail.com",
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true, // Use SSL for safety
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL || "info@thelogicore.com",
      subject: `Inquiry From Logicore Website`,
      html: `
        <h2>Inquiry From : ${name}</h2>
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
    return new NextResponse(JSON.stringify({ success: false, error: "Email failed" }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 