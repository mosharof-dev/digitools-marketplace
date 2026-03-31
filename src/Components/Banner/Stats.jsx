import React from 'react';

const Stats = () => {
  const statData = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 py-12 lg:py-16 mb-8">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          
          {statData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <div className="text-center flex-1 py-6 md:py-0 w-full">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  {item.value}
                </h2>
                <p className="text-indigo-100 text-sm lg:text-lg font-medium opacity-90 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>

             
              {index !== statData.length - 1 && (
                <>
                  {/* Vertical Divider for Desktop */}
                  <div className="hidden md:block h-20 w-1 bg-white/20"></div>
                  
                  {/* Horizontal Divider for Mobile) */}
                  <div className="md:hidden w-full h-1 bg-white/20 my-2"></div>
                </>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;