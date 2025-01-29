import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const opportunities = [
  {
    title: 'Solar Farm in Cape Town',
    type: 'Renewable Energy',
    minInvestment: 50,
    expectedReturn: '12-15%',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
  },
  {
    title: 'Kenyan Coffee Harvest',
    type: 'Agriculture',
    minInvestment: 100,
    expectedReturn: '8-10%',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80',
  },
  {
    title: 'Lagos Tech Hub',
    type: 'Real Estate',
    minInvestment: 75,
    expectedReturn: '10-12%',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
  },
];

const InvestmentOpportunities = () => {
  return (
    <div id="invest" className="min-h-screen flex items-center py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Featured Investment Opportunities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover curated investment opportunities across Africa
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-sm font-medium text-blue-600">
                    {opportunity.type}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-blue-900">
                  {opportunity.title}
                </h3>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Minimum Investment</p>
                    <p className="text-lg font-medium text-blue-900">
                      ${opportunity.minInvestment}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Expected Return</p>
                    <p className="text-lg font-medium text-green-600">
                      {opportunity.expectedReturn}
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  Invest Now <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;