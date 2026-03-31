import React from 'react';

const ProductToggle = ({ activeTab, setActiveTab, cart }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* --- Text Content --- */}
        <div className="max-w-2xl mb-10 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900">
            Premium Digital Tools
          </h2>
          <p className="text-slate-500 text-lg">
            Choose from our curated collection of premium digital products 
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* --- Toggle Buttons  --- */}
        <div className="inline-flex p-1.5 bg-white border border-gray-100 shadow-xl rounded-full gap-2">
          {/* Products Button */}
          <button
            onClick={() => setActiveTab('Products')}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeTab === 'Products'
                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-200'
                : 'text-slate-600 hover:bg-gray-50'
            }`}
          >
            Products
          </button>

          {/* Cart Button with Dynamic Count */}
          <button
            onClick={() => setActiveTab('Cart')}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeTab === 'Cart'
                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-200'
                : 'text-slate-600 hover:bg-gray-50'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductToggle;