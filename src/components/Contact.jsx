import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Format the message to include all information
    const formData = new FormData(e.target);
    const messageText = `
Name: ${formData.get('from_name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}
Subject: ${formData.get('subject')}

Message:
${formData.get('message')}
    `;

    // Create template parameters
    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('email'),
      reply_to: "office@zonsecureservices.com",
      to_name: "ZSS Team",
      message: messageText,
      subject: `New Website Inquiry from ${formData.get('from_name')}`,
      sender_email: "office@zonsecureservices.com"
    };

    emailjs.send(
      'service_93o9jhj',
      'template_8qdi92m',
      templateParams,
      'bgPxucbr1jv0C-nFE'
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus({
          type: 'error',
          message: `Sorry, something went wrong. Error: ${error.text || 'Unknown error'}`
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Contact Us
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-xl text-gray-600">
              Get in touch with us for any inquiries or support
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Hidden fields for email configuration */}
            <input type="hidden" name="to_email" value="office@zonsecureservices.com" />
            
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            {submitStatus.message && (
              <div className={`rounded-md p-4 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                <p>{submitStatus.message}</p>
              </div>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary/10 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">
                <a href="tel:+919137432202" className="hover:text-primary">
                  +91 8169314899
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary/10 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">
                <a href="mailto:office@zonsecureservices.com" className="hover:text-primary">
                office@zonsecureservices.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary/10 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">WhatsApp</h3>
              <p className="mt-2 text-base text-gray-500">
                <a href="https://wa.me/918169314899" className="hover:text-primary">
                  +91 8169314899
                </a>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-base text-gray-500">
              {/* Or email us directly at{' '} */}
              <a href="mailto:office@zonsecureservices.com" className="hover:text-primary">
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
