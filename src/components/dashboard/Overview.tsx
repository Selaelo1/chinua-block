import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, DollarSign, Percent } from 'lucide-react';

const Overview = () => {
  return (
    <div className="p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600">Here's what's happening with your investments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">$0.00</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Investments</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">0</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Returns</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">0%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Percent className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Investments */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Featured Investments</h2>
          <Link to="/dashboard/investments" className="text-blue-600 hover:text-blue-700 flex items-center">
            View All <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredInvestments.map((investment) => (
            <div key={investment.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={investment.image}
                alt={investment.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 lg:p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">{investment.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{investment.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Minimum</p>
                    <p className="font-medium text-gray-900">${investment.minimum}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Expected Return</p>
                    <p className="font-medium text-green-600">{investment.return}</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const featuredInvestments = [
  {
    id: 1,
    title: "Solar Farm in Cape Town",
    type: "Renewable Energy",
    minimum: 50,
    return: "12-15%",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Kenyan Coffee Harvest",
    type: "Agriculture",
    minimum: 100,
    return: "8-10%",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Lagos Tech Hub",
    type: "Real Estate",
    minimum: 75,
    return: "10-12%",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  }
];

export default Overview;