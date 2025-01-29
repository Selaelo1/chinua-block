import React from 'react';
import { UserPlus, Wallet, TrendingUp, BarChart } from 'lucide-react';

const steps = [
  {
    title: 'Create Account',
    description: 'Sign up with your mobile number and complete a simple KYC process',
    icon: UserPlus,
  },
  {
    title: 'Fund Your Wallet',
    description: 'Deposit funds using M-Pesa, bank transfer, or other local payment methods',
    icon: Wallet,
  },
  {
    title: 'Choose Investments',
    description: 'Browse and select from our curated investment opportunities',
    icon: TrendingUp,
  },
  {
    title: 'Track & Grow',
    description: 'Monitor your portfolio and watch your investments grow',
    icon: BarChart,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="min-h-screen flex items-center py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            How ChanuaBlock Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Start your investment journey in four simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 h-0.5 w-full bg-blue-100" />
                )}
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-blue-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-center text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;