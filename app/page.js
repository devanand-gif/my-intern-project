
"use client"; 
import { FaArrowDown } from 'react-icons/fa'; // Imports the Font Awesome down arrow icon

// Defines the Home functional component
export default function Home() {
  // Handler function for the click event on the Contact circle button
  const handleContactClick = () => {
    console.log("Contact circle clicked!");
    // Placeholder for desired action, e.g., smooth scrolling to a contact section
  };

  // Renders the main content of the Home page
  return (
    // Main container for the page, centering content and applying background color
    <main className="flex flex-col items-center justify-center bg-[#f4f4f4]">
      {/* Hero Section - Full width with rounded corners and overflow handling */}
      <section className="relative w-full max-w-7xl h-[600px] overflow-hidden rounded-2xl mt-6 z-10">
        {/* Hero Image covering the entire section */}
        <img
          src="/hero.jpg" // Source path for the hero background image
          alt="Hero Image"
          className="object-cover w-full h-full"
        />

        {/* Overlay layer for text and button with semi-transparent background */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-start items-start px-8 pt-8">
          {/* Container for hero text, with left margin for positioning */}
          <div className="ml-8">
            {/* Hero main heading lines */}
            <h1 className="text-5xl font-light text-white leading-tight font-raleway">
              Explore the
            </h1>
            <h1 className="text-5xl font-light text-white leading-tight font-raleway">
              world with us
            </h1>

            {/* Learn More Button container with top margin */}
            <div className="mt-4">
              {/* Learn More Button with layered appearance and hover effects */}
              <button
                onClick={() => console.log("Learn more button clicked!")} // Placeholder click handler
                className="relative inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Learn more"
              >
                {/* Button text background with blur and styling */}
                <div className="bg-white/90 backdrop-blur-sm text-black pl-4 pr-12 py-2 rounded-full shadow-sm text-sm font-medium transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                  Learn more
                </div>

                {/* Absolute positioned icon circle with styling and hover effects */}
                <div className="absolute right-0 translate-x-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {/* SVG icon for the button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white" // Icon styling
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19l14-14M13 5h6v6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Contact and Down Arrow Circles positioned at the bottom left */}
        <div className="absolute bottom-6 left-6 text-white flex flex-col items-center z-20">
          {/* Contact Button Circle with styling and click handler */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full flex items-center justify-center text-sm font-medium mb-[-1rem] cursor-pointer bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-105 hover:shadow-md"
            onClick={handleContactClick}
          >
            Contact
          </div>

          {/* Down Arrow Circle with styling */}
          <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-white rounded-full flex items-center justify-center text-white">
            {/* Span to apply group hover effects to the icon */}
            <span className="group">
              {/* Down Arrow Icon with size and hover effects */}
              <FaArrowDown className="text-lg md:text-xl text-white transition-all duration-300 group-hover:scale-125 group-hover:text-gray-300" />
            </span>
          </div>
        </div>
      </section>

      {/* Angled Card Overlapping Section - Positioned below hero and aligned right */}
      <div className="relative w-full max-w-7xl z-20 -mt-20 flex justify-end px-6">
        {/* Angled Card element with background, shadow, padding, and custom clip-path */}
        <div className="relative bg-white shadow-lg p-8 pt-12 w-[300px] rounded-[16px] clip-diagonal">
          {/* Circle Arrow Icon in the top right clipped corner */}
          <div className="absolute top-3 right-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
             {/* Span for group hover effects */}
            <span className="group">
              {/* SVG icon within the circle, with hover effects */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-black transition-all duration-300 group-hover:scale-150 group-hover:text-gray-600 group-hover:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* Card Content - Paragraph text describing destinations */}
          <p className="text-base font-bold leading-snug mb-4">
            Explore our curated list of must-visit destinations around the globe.
          </p>

          {/* Card Footer - Status indicators with text and number */}
          <div className="flex justify-between text-[10px] text-gray-400 pt-3 border-t border-gray-200">
            <span>(FIRST)</span>
            <span>(PRESENT)</span>
            <span>01</span>
          </div>
        </div>
      </div>
    </main>
  );
}