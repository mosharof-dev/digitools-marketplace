
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      desc: "Perfect for getting started",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      price: "29",
      desc: "Best for professionals",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "99",
      desc: "For teams and businesses",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-0">
        
        {/* Header Content */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {plans.map((plan, index) => (
            <div 
              key={index}
              
              className={`relative p-8 rounded-xl border flex flex-col h-full transition-all duration-300 ${
                plan.isPopular 
                ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white  shadow-xl   " 
                : "bg-[#F2F2F2] text-slate-900 border-slate-100 shadow-sm  "
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              {/* Title & Price */}
              <div className="mb-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.isPopular ? "text-purple-100" : "text-slate-400"}`}>
                  {plan.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`text-sm ${plan.isPopular ? "text-purple-100" : "text-slate-400"}`}>/Month</span>
                </div>
              </div>

              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <FaCheck className={`mt-1  ${plan.isPopular ? "text-white" : "text-green-500"}`} />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button - Exactly at the bottom of the card */}
              <button className={`w-full py-4 rounded-full font-bold transition-all  active:scale-95 ${
                plan.isPopular 
                ? "bg-white text-[#4F39F6] hover:bg-slate-50" 
                : "bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:bg-[#6D28D9]"
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;