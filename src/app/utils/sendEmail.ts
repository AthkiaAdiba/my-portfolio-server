import nodemailer from 'nodemailer';
import config from '../config';
import { TEmail } from '../modules/email/email.interface';

export const sendEmail = async (data: TEmail) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production', // true for port 465, false for other ports
    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
  });

  await transporter.sendMail({
    from: config.email_user, // sender address
    to: 'athkiaadiba@gmail.com', // list of receivers
    replyTo: data.email,
    subject: data.subject, // Subject line
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`, // plain text body
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="color: #555;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="border-left: 3px solid #ccc; padding-left: 10px;">${data.message}</p>
    </div>`, // html body
  });
};
