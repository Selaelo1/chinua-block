import React, { useState } from 'react';
import { Globe2, Home, PieChart, Wallet, Settings, LogOut, Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: Home },
    { name: 'Investments', href: '/dashboard/investments', icon: PieChart },
    { name: 'Wallet', href: '/dashboard/wallet', icon: Wallet },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const NavLinks = () => (
    <>
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        );
      })}
      <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg w-full mt-4">
        <LogOut className="h-5 w-5 mr-3" />
        Sign Out
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-30">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-900">ChanuaBlock</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-20 bg-gray-800 bg-opacity-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl">
            <div className="p-4">
              <NavLinks />
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-900">ChanuaBlock</span>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <NavLinks />
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 pt-16 lg:pt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;