import React from 'react';

const Stats = () => {
  const statData = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="bg-linear-to-r mb-8 from-indigo-600 to-purple-600 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Grid layout for responsiveness */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          
          {statData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <div className="text-center flex-1">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {item.value}
                </h2>
                <p className="text-purple-100 text-sm lg:text-base font-medium opacity-90">
                  {item.label}
                </p>
              </div>

              {/* Vertical Divider (Only visible on Desktop/Tablet) */}
              {index !== statData.length - 1 && (
                <div className="hidden md:block h-16 w-1 bg-white/20"></div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;