import React from "react";
import { HiOutlineTrash, HiOutlineShoppingCart } from "react-icons/hi";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart}) => {

  //Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
  const updatedCart = cart.filter(product => product.id !== item.id);
  setCart(updatedCart); 
  toast.warning(`${item.name} removed from cart`,{
    position: "top-center"
  });
};

  //Checkout
  const handleCheckout = () => {
    setCart([]);
    toast.success("Order placed successfully ",{
      position: "top-center"
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">

      {/*  EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="bg-white border border-dashed rounded-2xl py-16 flex flex-col items-center justify-center text-center">

          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <HiOutlineShoppingCart className="text-purple-600 text-xl" />
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Click Cart any time to review the products you select.
          </p>

        </div>
      ) : (

        /*  CART WITH ITEMS */
        <div className="bg-white border border-gray-200 rounded-4xl p-6 shadow-sm">

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Your Cart
          </h2>

          {/* Items */}
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
              >

                {/* Left */}
                <div className="flex items-center gap-3">
                 <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
                   <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                 </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Right (Remove) */}
      <button
 
  onClick={() => handleRemove(item)}
    className="flex items-center gap-1 text-sm text-red-500 hover:bg-red-50 px-2 py-1 rounded-md transition"
                >
                  <HiOutlineTrash className="text-base" />
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-5">
            <p className="text-gray-500">Total:</p>
            <p className="text-xl font-bold text-gray-900">
              ${total}
            </p>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full py-3 rounded-full text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
          >
            Proceed To Checkout
          </button>

        </div>
      )}

    </div>
  );
};

export default Cart;