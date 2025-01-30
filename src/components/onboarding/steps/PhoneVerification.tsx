import React, { useState } from "react";

interface PhoneVerificationProps {
  onNext: () => void;
  onBack: () => void;
}

const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  onNext,
  onBack,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+254");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      setCodeSent(true);
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode) {
      onNext();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  return (
    <div className="max-w-lg mx-auto space-y-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Phone Verification
      </h2>

      {!codeSent ? (
        <form onSubmit={handleSendCode} className="space-y-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="rounded-l-md border border-r-0 border-gray-300 bg-gray-50 py-2 px-3 text-sm"
              >
                <option value="+254">+254</option>
                <option value="+234">+234</option>
                <option value="+27">+27</option>
                <option value="+233">+233</option>
                <option value="+255">+255</option>
              </select>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-lg"
                placeholder="712 345 678"
                maxLength={9}
              />
            </div>
            {phoneNumber && (
              <p className="mt-2 text-sm text-gray-600">
                Your number: {countryCode} {phoneNumber}
              </p>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-6 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!phoneNumber || phoneNumber.length < 9}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Code
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode} className="space-y-6">
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Verification Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              required
              value={verificationCode}
              onChange={(e) =>
                setVerificationCode(e.target.value.replace(/\D/g, ""))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-lg"
              placeholder="Enter 6-digit code"
              maxLength={6}
            />
            <p className="mt-2 text-sm text-gray-500">
              We've sent a verification code to {countryCode} {phoneNumber}
            </p>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setCodeSent(false)}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-6 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!verificationCode || verificationCode.length < 6}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
