import { useState, useEffect } from 'react';

export default function NavigationGuide() {
  const [showButtons, setShowButtons] = useState(true);

      useEffect(() => {
  //   Hide buttons after 7 seconds
    const timer = setTimeout(() => setShowButtons(false), 5000);
    return () => clearTimeout(timer);
      }, []);

  return (
    showButtons && (
      <div className="fixed bottom-20 left-0 right-0 flex flex-col items-center space-y-4 pointer-events-none px-4">
        {/* Navigation Buttons */}
        <div className="flex space-x-6">
          {/* Left Button */}
          <button
            className="pointer-events-auto text-blue-100 bg-gray-800 border border-gray-800 rounded-sm px-4 py-[2px] text-xl font-extrabold shadow-lg 
                             animate-pulse-shadow transition-shadow duration-500 ease-in-out shadow-white"
          >
            &#x2190; {/* Left Arrow */}
          </button>

          {/* Right Button */}
          <button
            className="pointer-events-auto text-blue-100 bg-gray-800 border border-gray-800 rounded-sm px-4 py-[2px] text-xl font-extrabold shadow-lg 
                             animate-pulse-shadow transition-shadow duration-500 ease-in-out shadow-white"
          >
            &#x2192; {/* Right Arrow */}
          </button>
        </div>

        {/* Instructions Text */}
        <div className="text-center space-y-2">
          <p className="text-blue-600 text-base sm:text-sm md:text-md font-semibold">
            Use the left and right arrow buttons to navigate our world
          </p>
        </div>
      </div>
    )
  );
}
