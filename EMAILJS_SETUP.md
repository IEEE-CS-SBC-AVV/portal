# EmailJS Setup Guide

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to https://emailjs.com and sign up for FREE
2. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - Outlook, Yahoo, or custom SMTP
4. Click **Connect Account** and authorize
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Click **Save** and copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abc123XYZ`)

### 5. Update .env.local
Open `.env.local` and replace the placeholders:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123XYZ
```

### 6. Restart Dev Server
```bash
npm run dev
```

### 7. Test the Form
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your inbox at computersociety.avv@gmail.com

## Troubleshooting

### "EmailJS configuration missing"
- Make sure `.env.local` exists with all 3 variables
- Restart the dev server after adding variables
- Variable names must start with `NEXT_PUBLIC_`

### Form submits but no email
- Check EmailJS dashboard for errors
- Verify email service is connected
- Check spam folder
- Free tier: 200 emails/month limit

### "Failed to send email"
- Check browser console for specific error
- Verify all IDs are correct (no spaces or typos)
- Check EmailJS dashboard for service status

## Free Tier Limits
- ✅ 200 emails/month
- ✅ Unlimited email services
- ✅ Unlimited templates
- ✅ No credit card required

Perfect for student chapters! Upgrade only if you need more emails.
