/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

interface InvestmentPreferencesProps {
  onNext: () => void;
  onBack: () => void;
}

const investmentTypes = [
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Commercial and residential properties",
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Farming and agricultural projects",
  },
  {
    id: "renewable",
    name: "Renewable Energy",
    description: "Solar, wind, and clean energy projects",
  },
  {
    id: "tech",
    name: "Technology",
    description: "Tech startups and digital innovations",
  },
];

const InvestmentPreferences: React.FC<InvestmentPreferencesProps> = ({
  onNext,
  onBack,
}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [investmentAmount, setInvestmentAmount] = useState("50-500");

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((id) => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-base font-medium text-gray-900">
          Investment Interests
        </label>
        <p className="text-sm text-gray-500">
          Select the types of investments you're interested in
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {investmentTypes.map((type) => (
            <div
              key={type.id}
              className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                selectedTypes.includes(type.id)
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
              onClick={() => handleTypeToggle(type.id)}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{type.name}</p>
                    <p className="text-gray-500">{type.description}</p>
                  </div>
                </div>
                {selectedTypes.includes(type.id) && (
                  <div className="shrink-0 text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        <div>
        <label className="text-base font-medium text-gray-900">
          Monthly Investment Target
        </label>
        <p className="text-sm text-gray-500">
          How much would you like to invest monthly?
        </p>
        <div className="mt-4">
          <select
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="50-500">100 - $500</option>
            <option value="501-1000">$501 - $1,000</option>
            <option value="1001-5000">$1,001 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>
        </div> 
        */}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default InvestmentPreferences;
