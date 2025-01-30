import React, { useState } from "react";
import {
  TrendingUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const opportunities = [
  {
    title: "Gold Edge Property Development",
    type: "Real Estate",
    minInvestment: 500,
    expectedReturn: "15-18%",
    image:
      "https://images.unsplash.com/photo-1604014211263-7307f8c9f70c?auto=format&fit=crop&q=80",
    description:
      "A premium property development project with high-value residential properties in prime locations.",
  },
  {
    title: "Solar Farm in Cape Town",
    type: "Renewable Energy",
    minInvestment: 50,
    expectedReturn: "12-15%",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    description:
      "An innovative solar energy farm project in Cape Town, generating green energy for the community.",
  },
  {
    title: "Kenyan Coffee Harvest",
    type: "Agriculture",
    minInvestment: 100,
    expectedReturn: "8-10%",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    description:
      "Support sustainable coffee farming in Kenya and enjoy the fruits of a thriving agricultural market.",
  },
  {
    title: "Lagos Tech Hub",
    type: "Real Estate",
    minInvestment: 75,
    expectedReturn: "10-12%",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description:
      "A cutting-edge technology hub in Lagos aimed at supporting Africa's digital transformation.",
  },
];

const InvestmentOpportunities = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<any | null>(
    null
  );
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollRef.current.scrollLeft;
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleViewInfo = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
  };

  const handleCloseInfo = () => {
    setSelectedOpportunity(null);
  };

  return (
    <div
      id="invest"
      className="min-h-screen flex items-center py-16 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Featured Investment Opportunities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover curated investment opportunities across Africa
          </p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative mt-12">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
          >
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0 w-80"
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
                      <p className="text-sm text-gray-500">
                        Minimum Investment
                      </p>
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
                  <button
                    onClick={() => handleViewInfo(opportunity)}
                    className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Modal for Viewing Investment Info */}
      {selectedOpportunity && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-900">
              {selectedOpportunity.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {selectedOpportunity.description}
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Minimum Investment: ${selectedOpportunity.minInvestment}
              </p>
              <p className="text-sm text-gray-500">
                Expected Return: {selectedOpportunity.expectedReturn}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseInfo}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS to hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default InvestmentOpportunities;
