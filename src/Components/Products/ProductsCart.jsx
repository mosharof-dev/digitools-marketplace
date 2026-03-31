
import { HiCheckCircle } from "react-icons/hi";
import { toast } from "react-toastify";

const ProductsCart = ({ product, cart, setCart }) => {



const isExist = cart.some(item => item.id === product.id);

const handleAddToCart = () => {


  if (isExist) {
    toast.warning("Already added to cart ");
    return;
  }

  
  toast.success("Product added to cart 🛒");

  setCart(prev => [...prev, product]);
};

  const tagStyles = {
    "best-seller": "bg-orange-100 text-orange-600",
    "popular": "bg-purple-100 text-purple-600",
    "new": "bg-green-100 text-green-600"
  };

  const getPeriodText = (period) => {
    if (period === "monthly") return "/mo";
    if (period === "yearly") return "/yr";
    return "One-Time";
  };

  return (
    <div className="bg-white  border border-transparent hover:border-indigo-400 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">

      {/* Top */}
      <div className="flex justify-between items-start mb-4">
       <div className="w-16 h-16 bg-gray-100 rounded-2xl flex justify-center items-center">
         <img
          src={product.icon}
          alt={product.name}
          className="w-10 h-10 object-contain"
        />
       </div>

        <span className={`text-xs px-3 py-1 rounded-full font-medium ${tagStyles[product.tagType]}`}>
          {product.tag}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-3">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-3">
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-500 ml-1">
          {getPeriodText(product.period)}
        </span>
      </div>

      {/* Features */}
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {
          product.features.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-500"><HiCheckCircle/></span>
              {item}
            </li>
          ))
        }
      </ul>

      {/* Button */}
     <button
        onClick={handleAddToCart}
        className={`w-full py-2 rounded-full text-white transition ${
          isExist
          ? "bg-green-600 cursor-default" 
          : "bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90"
        }`}
      >
        {isExist ? "Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductsCart;

