import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={LOGO_URL} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold text-gray-800">MyApp</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6 text-gray-700 font-medium">
            <li>{isOnline ? "🟢 Online" : "🔴 Offline"}</li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Grocery
              </Link>
            </li>
            <li>Cart</li>
            <li>
              <button
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
                className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
