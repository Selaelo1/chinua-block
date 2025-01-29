import React, { useState } from 'react';

interface PhoneVerificationProps {
  onNext: () => void;
  onBack: () => void;
}

const PhoneVerification: React.FC<PhoneVerificationProps> = ({ onNext, onBack }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setCodeSent(true);
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="space-y-6">
      {!codeSent ? (
        <form onSubmit={handleSendCode} className="space-y-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <select
                className="rounded-l-md border border-r-0 border-gray-300 bg-gray-50 py-2 px-3 text-sm"
              >
                <option>+254</option>
                <option>+234</option>
                <option>+27</option>
                <option>+233</option>
                <option>+255</option>
              </select>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="712 345 678"
              />
            </div>
          </div>

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
              Send Code
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              Verification Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              required
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter 6-digit code"
            />
            <p className="mt-2 text-sm text-gray-500">
              We've sent a verification code to your phone number
            </p>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setCodeSent(false)}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Back
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Verify Code
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PhoneVerification;