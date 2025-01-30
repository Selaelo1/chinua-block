import React, { useState } from "react";
import { Globe2 } from "lucide-react";
import PersonalInfo from "./steps/PersonalInfo";
import PhoneVerification from "./steps/PhoneVerification";
import InvestmentPreferences from "./steps/InvestmentPreferences";
import KYCVerification from "./steps/KYCVerification";
import { useNavigate } from "react-router-dom";

export type OnboardingStep = "personal" | "phone" | "preferences" | "kyc";

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("personal");
  const navigate = useNavigate();

  const steps = [
    { id: "personal", label: "Personal Info" },
    { id: "phone", label: "Phone Verification" },
    { id: "preferences", label: "Preferences" },
    { id: "kyc", label: "Verification" },
  ];

  const getCurrentStepIndex = () => {
    return steps.findIndex((step) => step.id === currentStep);
  };

  const handleNext = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as OnboardingStep);
    }
  };

  const handleBack = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as OnboardingStep);
    }
  };

  const handleComplete = () => {
    navigate("/dashboard");
  };

  const renderStep = () => {
    switch (currentStep) {
      case "personal":
        return <PersonalInfo onNext={handleNext} />;
      case "phone":
        return <PhoneVerification onNext={handleNext} onBack={handleBack} />;
      case "preferences":
        return (
          <InvestmentPreferences onNext={handleNext} onBack={handleBack} />
        );
      case "kyc":
        return (
          <KYCVerification onBack={handleBack} onComplete={handleComplete} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md w-full border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">
                ChanuaBlock
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900">
              Create Your Account
            </h2>
            <p className="text-gray-500 mt-2">
              Step {getCurrentStepIndex() + 1} of {steps.length}
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="p-8">
            <div className="flex justify-between items-center w-full">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        getCurrentStepIndex() >= index
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {/* Hide labels on mobile, show on larger screens */}
                    <span className="text-sm mt-2 text-gray-600 text-center hidden sm:block">
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-colors duration-300 ${
                        getCurrentStepIndex() > index
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Step */}
          <div className="p-8 space-y-6">{renderStep()}</div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingPage;
