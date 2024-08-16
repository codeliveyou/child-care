import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SearchInput() {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <AnimatePresence mode="wait">
      {isExpand ? (
        <div className="relative flex justify-end">
          <motion.input
            placeholder="Sök"
            className="outline-none rounded-lg pl-4 pr-12 h-full"
            onMouseLeave={() => {
              setIsExpand(false);
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
          />
          <img
            src="/Zoom.svg"
            alt="Search icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </div>
      ) : (
        <div className="p-4 flex items-center justify-center">
          <button
            onClick={() => {
              setIsExpand(true);
            }}
          >
            <img src="/Zoom.svg" />
          </button>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SearchInput;
