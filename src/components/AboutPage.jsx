import React from 'react';
import Footer from './Footer';
function AboutPage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-8">
      <h1 className="text-4xl font-semibold text-blue-700 mb-4">About Us</h1>
      <p className="text-md text-gray-700 leading-relaxed text-center max-w-3xl">
        We provide comprehensive solutions that empower individuals to cultivate their own organic produce through kitchen and terrace farming.
        Our mission is to make sustainable farming easy and accessible for everyone, no matter the space or time constraints.
      </p>
    </div>
      <Footer />
      </>
  );
}

export default AboutPage;