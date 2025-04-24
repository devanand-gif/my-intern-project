"use client";

import { useEffect, useState } from "react"; // Imports necessary React hooks
import { FaBookmark, FaBars, FaShoppingCart } from "react-icons/fa"; // Imports icons for UI elements

// Defines the Navbar functional component
export default function Navbar() {
  // State variable to store and update the current time
  const [time, setTime] = useState("");
  // State variable to manage and track the active language selection
  const [activeLanguage, setActiveLanguage] = useState('EN');

  // Effect hook to update the current time every second
  useEffect(() => {
    // Function to get and format the current time for London
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: "Europe/London", hour12: false };
      setTime(now.toLocaleTimeString("en-GB", options));
    };

    // Initial call to set time immediately
    updateTime();
    // Sets up an interval to update the time every 1000ms (1 second)
    const interval = setInterval(updateTime, 1000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Handler function for changing the active language
  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
    console.log(`Language changed to: ${lang}`);
    // Placeholder for actual language switching logic (e.g., context update, API call)
  };

  // Handler function for the Bookmark button click event
  const handleBookmarkClick = () => {
    console.log("Bookmark button clicked!");
    // Placeholder for logic to display saved items or trigger an action
  };

  // Handler function for the Shopping Cart button click event
  const handleCartClick = () => {
    console.log("Cart button clicked!");
    // Placeholder for logic to open the shopping cart or trigger an action
  };

  // Handler function for the Profile/Menu button click event
  const handleProfileMenuClick = () => {
    console.log("Profile/Menu button clicked!");
    // Placeholder for logic to open a user profile dropdown or a side navigation menu
  };

  // Renders the Navbar UI
  return (
    // Main container for the navbar, applying flexbox for layout and styling
    <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-sm max-w-[1200px] mx-auto mt-4">

      {/* Logo section */}
      <div className="text-xl font-bold">trvvrat</div>

      {/* Displays the current time and location */}
      <div className="text-sm text-gray-600">{time} London</div>

      {/* Container for the right-side interactive elements */}
      <div className="flex items-center space-x-4">

        {/* Language Toggle section with capsule styling */}
        <div className="flex items-center text-sm bg-[#e0e0e0] rounded-full p-1">
           {/* EN Language Option button */}
          <span
            className={`px-3 py-1 rounded-full cursor-pointer transition-colors duration-200 ${activeLanguage === 'EN' ? 'bg-white text-black shadow-sm' : 'text-gray-700'}`}
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </span>
           {/* IN Language Option button */}
          <span
             className={`px-3 py-1 rounded-full cursor-pointer transition-colors duration-200 ${activeLanguage === 'IN' ? 'bg-white text-black shadow-sm' : 'text-gray-700'}`}
             onClick={() => handleLanguageChange('IN')}
          >
             IN
           </span>
        </div>

        {/* Bookmark button with icon and notification badge */}
        <button
          className="relative cursor-pointer p-2 rounded-full transition duration-150 ease-in-out hover:bg-gray-200 hover:scale-105"
          onClick={handleBookmarkClick}
        >
          <FaBookmark className="text-xl text-gray-800" />
          {/* Badge displaying the number of saved items */}
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs font-bold text-black rounded-full w-4 h-4 flex items-center justify-center p-1">
            21
          </span>
        </button>

        {/* Shopping Cart button with icon and notification badge */}
        <button
          className="relative cursor-pointer p-2 rounded-full transition duration-150 ease-in-out hover:bg-gray-200 hover:scale-105"
          onClick={handleCartClick}
        >
          <FaShoppingCart className="text-xl text-gray-800" />
          {/* Badge displaying the number of items in the cart */}
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs font-bold text-black rounded-full w-4 h-4 flex items-center justify-center p-1">
            1
          </span>
        </button>

        {/* Combined button for Hamburger menu and User Avatar */}
        <button
          className="flex items-center justify-center rounded-full border border-gray-300 px-2 py-1 space-x-2 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-md"
          onClick={handleProfileMenuClick}
        >
           {/* Hamburger menu icon */}
          <FaBars className="text-lg text-gray-800" />
           {/* User Avatar image */}
          <img
            src="/avatar.jpg" // Source path for the user avatar image
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}