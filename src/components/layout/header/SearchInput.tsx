import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SearchInput() {
  // State to track whether the search input is expanded
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <AnimatePresence mode="wait">
      {/* Conditionally render expanded search input or the button based on isExpand state */}
      {isExpand ? (
        <div className="relative flex justify-end">
          {/* Expanded search input */}
          <motion.input
            placeholder="Sök" // Placeholder text for the input
            className="outline-none rounded-lg py-4 pl-4 pr-12 h-full"
            onMouseLeave={() => {
              setIsExpand(false); // Collapse input when mouse leaves
            }}
            initial={{ width: 0 }} // Initial width for animation
            animate={{ width: "100%" }} // Expanded width for animation
            exit={{ width: 0 }} // Collapsed width for animation
          />
          {/* Search icon */}
          <img
            src="/Zoom.svg"
            alt="Search icon" // Alternative text for the search icon
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </div>
      ) : (
        <div className="p-4 flex items-center justify-center">
          {/* Button to expand the search input */}
          <button
            onClick={() => {
              setIsExpand(true); // Expand input when button is clicked
            }}
          >
            <img src="/Zoom.svg" alt="Search icon" /> {/* Search icon */}
          </button>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SearchInput;
