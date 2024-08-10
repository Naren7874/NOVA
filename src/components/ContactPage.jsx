import React from 'react';
import Footer from './Footer';
function ContactPage() {
  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-8">
      <h1 className="text-4xl font-semibold text-yellow-700 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-800 text-center mb-4">We'd love to hear from you!</p>
      <p className="text-md text-gray-700">
        Email: <a href="mailto:info@yourfarm.com" className="text-blue-500 underline">info@yourfarm.com</a>
      </p>
      <p className="text-md text-gray-700">
        Phone: <a href="tel:+1234567890" className="text-blue-500 underline">+123 456 7890</a>
      </p>
    </div>
    <Footer />
    </>
  );
}

export default ContactPage;