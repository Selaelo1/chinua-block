import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SignOutProps {
  className?: string;
  onClose?: () => void;
}

const SignOut: React.FC<SignOutProps> = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear authentication state
    localStorage.removeItem("isAuthenticated");

    // Close mobile menu if it's open
    if (onClose) {
      onClose();
    }

    // Navigate to landing page
    navigate("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className={`flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg w-full ${className}`}
    >
      <LogOut className="h-5 w-5 mr-3" />
      Sign Out
    </button>
  );
};

export default SignOut;
