import React from 'react';
import { FiUser, FiBox, FiSend } from "react-icons/fi"; 

const StepCard = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <FiUser className="text-4xl text-purple-600" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: <FiBox className="text-4xl text-purple-600" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <FiSend className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <section className="bg-[#F9FAFC] py-20 px-4">
      <div className="container mx-auto lg:px-8">
        {/* --- Header --- */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white border border-gray-100 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
            >
              {/* Floating Number (Absolute Positioning) */}
              <div className="absolute top-6 right-6 bg-indigo-600 text-white text-xs font-bold h-7 w-7 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-purple-100 transition-colors">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepCard;