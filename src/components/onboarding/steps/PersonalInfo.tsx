import React, { useState } from "react";

interface PersonalInfoProps {
  onNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords
    if (formData.password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters long",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Passwords do not match",
      });
      return;
    }

    // Store user data
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      country: formData.country,
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));
    onNext();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear errors when user types
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Create Your Account
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg p-3 sm:text-base"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg p-3 sm:text-base"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg p-3 sm:text-base"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg p-3 sm:text-base"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg p-3 sm:text-base"
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          name="country"
          id="country"
          required
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg p-3 sm:text-base"
        >
          <option value="">Select a country</option>
          <option value="KE">Kenya</option>
          <option value="NG">Nigeria</option>
          <option value="ZA">South Africa</option>
          <option value="GH">Ghana</option>
          <option value="TZ">Tanzania</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center rounded-lg border border-transparent bg-blue-600 py-3 px-6 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
