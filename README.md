# LogiCore Landing Page

## Email Configuration

To enable the contact form functionality, create a `.env.local` file in the root directory with the following variables:

```env
# Email configuration
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECEIVER_EMAIL=your-receiving-email@example.com
```

**Note**: For Gmail, you'll need to use an App Password rather than your regular password. You can generate one in your Google Account settings under Security > App passwords.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive design for all devices
- Modern UI with animations
- Contact form with email functionality
- SEO guide page
- And more!
