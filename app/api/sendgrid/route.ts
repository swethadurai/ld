import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Validate environment variables
if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is missing');
}

if (!process.env.SENDGRID_FROM_EMAIL) {
    throw new Error('SENDGRID_FROM_EMAIL is missing');
}

if (!process.env.SENDGRID_TO_EMAIL) {
    throw new Error('SENDGRID_TO_EMAIL is missing');
}

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
    try {
        // Parse and validate request body
        const body = await request.json();
        const { name, email, phone, company, jobTitle, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Required fields are missing' },
                { status: 400 }
            );
        }

        // Create HTML email content
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0F766E;">New Contact Form Submission</h2>
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #374151;">Contact Details:</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0;"><strong>Name:</strong></td>
                            <td>${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Email:</strong></td>
                            <td>${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                            <td>${phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Company:</strong></td>
                            <td>${company || 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Job Title:</strong></td>
                            <td>${jobTitle || 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Subject:</strong></td>
                            <td>${subject || 'Not provided'}</td>
                        </tr>
                    </table>
                    
                    <h3 style="color: #374151; margin-top: 20px;">Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            </div>
        `;

        try {
            // Send main notification email
            await sgMail.send({
                to: process.env.SENDGRID_TO_EMAIL,
                from: process.env.SENDGRID_FROM_EMAIL,
                subject: `New Contact Form: ${subject || 'General Inquiry'}`,
                html: htmlContent,
                replyTo: email,
            });

            // Send auto-reply email
            await sgMail.send({
                to: email,
                from: process.env.SENDGRID_FROM_EMAIL,
                subject: 'Thank you for contacting LeadBridge',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #0F766E;">Thank You for Reaching Out!</h2>
                        <p>Dear ${name},</p>
                        <p>Thank you for contacting LeadBridge. We have received your message and will get back to you as soon as possible.</p>
                        <p>Best regards,<br>The LeadBridge Team</p>
                    </div>
                `
            });

            return NextResponse.json({
                success: true,
                message: 'Email sent successfully'
            });

        } catch (sendError: any) {
            console.error('SendGrid sending error:', sendError?.response?.body);
            return NextResponse.json(
                { 
                    success: false, 
                    error: sendError?.response?.body?.errors?.[0]?.message || 'Email sending failed'
                },
                { status: 500 }
            );
        }

    } catch (error: any) {
        console.error('API route error:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Server error occurred'
            },
            { status: 500 }
        );
    }
} 