import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone } = body;

    const msg = {
      to: 'swetha@leadtap.ai', // Replace with your email
      from: 'swetha@leadtap.ai', // Replace with your verified sender
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 