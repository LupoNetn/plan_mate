import { Outlet, useLocation, Link } from "react-router";
import { ArrowRightLeftIcon } from "lucide-react";

const AuthLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              planMate
            </h1>
            <ArrowRightLeftIcon size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Auth Form Content */}
        <div className="max-w-md w-full">
          <Outlet />
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              to={isLogin ? "/auth" : "/auth/login"}
              className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-indigo-50 via-blue-50 to-teal-50 items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-30"></div>

        {/* Illustration SVG */}
        <div className="relative z-10 max-w-lg">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Background shapes */}
            <circle
              cx="300"
              cy="300"
              r="200"
              fill="url(#gradient1)"
              opacity="0.1"
            />
            <circle
              cx="150"
              cy="150"
              r="80"
              fill="url(#gradient2)"
              opacity="0.15"
            />
            <circle
              cx="450"
              cy="450"
              r="100"
              fill="url(#gradient3)"
              opacity="0.1"
            />

            {/* Main illustration - Task management */}
            <g transform="translate(150, 200)">
              {/* Clipboard/Dashboard */}
              <rect
                x="0"
                y="0"
                width="300"
                height="200"
                rx="12"
                fill="white"
                stroke="#6366F1"
                strokeWidth="3"
                opacity="0.9"
              />
              <rect x="20" y="20" width="260" height="20" rx="4" fill="#E0E7FF" />
              <rect x="20" y="50" width="200" height="12" rx="4" fill="#F3F4F6" />
              <rect x="20" y="70" width="180" height="12" rx="4" fill="#F3F4F6" />
              <rect x="20" y="100" width="240" height="12" rx="4" fill="#F3F4F6" />
              <rect x="20" y="120" width="220" height="12" rx="4" fill="#F3F4F6" />
              <rect x="20" y="150" width="260" height="20" rx="4" fill="#10B981" />
              <rect x="20" y="180" width="200" height="12" rx="4" fill="#F3F4F6" />

              {/* Checkmark icons */}
              <circle cx="250" cy="60" r="8" fill="#10B981" />
              <circle cx="250" cy="110" r="8" fill="#10B981" />
              <circle cx="250" cy="190" r="8" fill="#F3F4F6" />
            </g>

            {/* Floating elements */}
            <g transform="translate(100, 100)">
              <circle cx="0" cy="0" r="15" fill="#6366F1" opacity="0.3" />
              <circle cx="30" cy="20" r="10" fill="#10B981" opacity="0.3" />
            </g>

            <g transform="translate(450, 150)">
              <circle cx="0" cy="0" r="12" fill="#F59E0B" opacity="0.3" />
              <circle cx="25" cy="15" r="8" fill="#EF4444" opacity="0.3" />
            </g>

            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Text overlay */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {isLogin ? "Welcome back!" : "Get started today"}
            </h2>
            <p className="text-gray-600">
              {isLogin
                ? "Manage your tasks and projects efficiently"
                : "Join thousands of teams already using planMate"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
