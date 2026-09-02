import React, { useState } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = "w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[var(--color-amode-black)] transition-colors text-sm font-sans";

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-amode-ivory)]">
      <Container>
        <SectionHeading title="Contact Us" subtitle="Get in Touch" />
        
        <div className="flex flex-col lg:flex-row gap-16 mt-16 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="font-serif text-2xl mb-8 text-[var(--color-amode-black)]">Send a Message</h2>
            {submitted ? (
              <div className="bg-white p-8 border border-gray-100 text-center">
                <p className="text-lg font-serif text-[var(--color-amode-black)] mb-2">Thank You</p>
                <p className="text-gray-600 text-sm">Your message has been received. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input type="text" placeholder="Full Name *" required className={inputClass} />
                </div>
                <div>
                  <input type="email" placeholder="Email Address *" required className={inputClass} />
                </div>
                <div>
                  <input type="text" placeholder="Subject" className={inputClass} />
                </div>
                <div className="pt-4">
                  <textarea placeholder="Your Message *" required rows="4" className={`${inputClass} resize-none`} />
                </div>
                <Button className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & FAQ */}
          <div className="lg:w-1/2 space-y-12">
            
            <div>
              <h2 className="font-serif text-2xl mb-6 text-[var(--color-amode-black)]">Business Information</h2>
              <div className="space-y-4 font-sans text-sm text-gray-600">
                <p className="flex items-start gap-4">
                  <span className="font-medium text-[var(--color-amode-black)] w-20">Address:</span>
                  <span>123 Fragrance Lane<br/>Grasse, France 06130</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="font-medium text-[var(--color-amode-black)] w-20">Email:</span>
                  <a href="mailto:hello@amode.com" className="hover:text-[var(--color-amode-gold)] transition-colors">hello@amode.com</a>
                </p>
                <p className="flex items-start gap-4">
                  <span className="font-medium text-[var(--color-amode-black)] w-20">Phone:</span>
                  <a href="tel:+33123456789" className="hover:text-[var(--color-amode-gold)] transition-colors">+33 1 23 45 67 89</a>
                </p>
                <p className="flex items-start gap-4">
                  <span className="font-medium text-[var(--color-amode-black)] w-20">Hours:</span>
                  <span>Mon-Fri: 9am - 6pm (CET)</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl mb-6 text-[var(--color-amode-black)]">Social</h2>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-[var(--color-amode-gold)] transition-colors font-sans text-sm uppercase tracking-widest">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-[var(--color-amode-gold)] transition-colors font-sans text-sm uppercase tracking-widest">TikTok</a>
                <a href="#" className="text-gray-600 hover:text-[var(--color-amode-gold)] transition-colors font-sans text-sm uppercase tracking-widest">Pinterest</a>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-100">
              <h2 className="font-serif text-xl mb-6 text-[var(--color-amode-black)] border-b pb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-[var(--color-amode-black)] text-sm mb-2">Do you ship internationally?</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Yes, we ship to most countries worldwide. Shipping costs are calculated at checkout based on your location.</p>
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-amode-black)] text-sm mb-2">What is your return policy?</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">We accept returns of unopened items within 14 days of delivery. Please contact our support team for a return authorization.</p>
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-amode-black)] text-sm mb-2">Are your products cruelty-free?</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Yes, all AMODE fragrances are strictly cruelty-free and never tested on animals.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
