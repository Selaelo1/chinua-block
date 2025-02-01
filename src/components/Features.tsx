import React from "react";
import { Globe2, Wallet, BookOpen, Shield } from "lucide-react";

const features = [
  {
    name: "Fractional Ownership",
    description: "Invest in high-value global assets with as little as R100",
    icon: Globe2,
  },
  {
    name: "Mobile-First Platform",
    description:
      "Access your investments anytime, anywhere with our mobile-optimized platform",
    icon: Wallet,
  },
  {
    name: "Educational Resources",
    description:
      "Learn investment strategies through our gamified learning modules",
    icon: BookOpen,
  },
  {
    name: "Enterprise Security",
    description:
      "Your investments are protected by blockchain technology and strong encryption",
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="min-h-screen flex items-center py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Why Choose ChanuaBlock?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Built for Africa, by Africa. We're making global investments
            accessible to everyone.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-blue-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-blue-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
