import {
  ArrowRightLeftIcon,
  Bell,
  Command,
  Search,
  Share2,
  User,
} from "lucide-react";

const Navbar = () => {
  const main = "Main Menu";
  const current = "Dashboard";

  return (
    <nav className="w-full bg-gray-200 border-2 border-gray-300 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
          {/* Left Section */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-w-0">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0 border-r border-gray-500 pr-3 sm:pr-4 md:pr-6">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
                planMate
              </h1>
              <ArrowRightLeftIcon
                size={18}
                className="hidden sm:block text-gray-400 shrink-0"
              />
            </div>

            <div className="hidden sm:flex items-center gap-2 md:gap-3 text-gray-500">
              <span className="text-sm md:text-base font-medium truncate">
                {main}
              </span>
              <span className="text-gray-800 text-xl">{">"}</span>
              <span className="hidden md:inline text-md text-gray-800 truncate font-bold">
                {current}
              </span>
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
            {/* Search - Hidden on mobile */}
            <div className="border border-gray-100 md:hidden xl:w-lg items-center gap-2 px-3 py-3 rounded-md hidden lg:flex bg-white">
              <button>
                <Search size={18} className="text-gray-700 shrink-0" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-gray-700 w-full"
              />
              <button>
                <Command size={18} className="text-gray-700 shrink-0" />
              </button>
            </div>

            {/* Search Icon for mobile */}
            <button className="lg:hidden bg-white p-2 shrink-0 text-gray-600 hover:text-gray-900 rounded-md">
              <Search size={18} />
            </button>

            {/* Notification */}
            <button className="bg-white p-2 rounded-md relative shrink-0 text-gray-600 hover:text-gray-900">
              <Bell size={18} className="sm:size-5" />
              <div className="w-3 h-3 rounded-full bg-red-500 absolute top-1 right-1" />
            </button>

            {/* Share */}
            <button className="bg-white p-2 rounded-md hidden sm:flex shrink-0 text-gray-600 hover:text-gray-900">
              <Share2 size={18} className="sm:size-5" />
            </button>

            {/* User Profile */}
            <button className="bg-white p-2 rounded-md shrink-0 text-gray-600 hover:text-gray-900">
              <User size={18} className="sm:size-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
