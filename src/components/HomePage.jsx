import React from 'react';
import Footer from './Footer';
function HomePage() {
  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-5xl font-bold text-green-700 mb-6">Welcome to Your Farm</h1>
      <p className="text-lg text-gray-800 text-center max-w-2xl">
        Empowering you to grow your own organic produce at home. Discover the joy of sustainable farming right in your kitchen or terrace!
      </p>
    </div>
    <Footer />
    </>
  );
}

export default HomePage;