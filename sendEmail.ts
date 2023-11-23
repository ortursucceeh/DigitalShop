// 'use server';

// import { getErrorMessage, validateSting } from '@/lib/utils';
// import { Resend } from 'resend';
// import React from 'react';
// import ContactFormEmail from '@/email/ContactFormEmail';

// export const sendEmail = async (formData: FormData) => {
//   const resend = new Resend(process.env.RESEND_API_KEY);

//   const senderEmail = formData.get('senderEmail');
//   const message = formData.get('message');

//   if (!validateSting(senderEmail, 150)) {
//     return {
//       error: 'Invalid sender email',
//     };
//   }

//   if (!validateSting(message, 5000)) {
//     return {
//       error: 'Invalid message',
//     };
//   }

//   let data;

//   try {
//     data = await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>',
//       to: 'tabasus03052003@gmail.com',
//       subject: 'Message from contact form',
//       reply_to: senderEmail as string,
//       react: React.createElement(ContactFormEmail, {
//         message: message as string,
//         senderEmail: senderEmail as string,
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return { data };
// };
