import React from 'react';

const CTA = () => {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-purple-100 text-sm md:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="bg-white text-[#7C3AED] font-semibold py-3.5 px-8 rounded-full hover:bg-opacity-90 transition shadow-lg w-full sm:w-auto">
            Explore Products
          </button>
          <button className="border-2 border-white/40 text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white/10 transition w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        {/* Footer info within CTA */}
        <p className="text-purple-200 text-xs md:text-sm font-medium opacity-80 pt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTA;