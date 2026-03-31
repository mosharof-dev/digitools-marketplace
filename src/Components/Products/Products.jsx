import React, { use } from 'react';

import ProductsCart from './ProductsCart';

const Products = ({ productPromise }) => {
  const products = use(productPromise);

  return (
    <section className="container mx-auto  py-10">
      {/* 3-column layout desktop-e, mobile-e 1-column */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{products.map((product) => (
    <ProductsCart product={product} />
        ))}
      </div> */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {
    products.map(product => (
      <ProductsCart key={product.id} product={product} />
    ))
  }
</div>
    </section>
  );
};

export default Products;