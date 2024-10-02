import { twMerge } from "tailwind-merge";

// Define the props for the Toggle component
type ToggleProps = {
  isToggled: boolean; // Determines the current state of the toggle
  handleToggle: (toggle: boolean) => void; // Callback function to handle toggle state changes
  className?: string; // Optional custom class names for additional styling
  spinClass?: string; // Optional class name for spin animation when toggled off
  spinActiveClass?: string; // Optional class name for spin animation when toggled on
};

const Toggle = ({
  isToggled, // Current state of the toggle
  handleToggle, // Function to handle toggle state changes
  className = "", // Default className is an empty string
  spinClass = "", // Default spinClass is an empty string
  spinActiveClass = "", // Default spinActiveClass is an empty string
}: ToggleProps) => {
  return (
    <div
      className={twMerge(
        // Container styling with conditional alignment based on toggle state
        "p-0.5 w-[50px] flex items-center cursor-pointer bg-light-background rounded-full",
        !isToggled ? "justify-start" : "justify-end", // Align the toggle based on the state
        className // Additional custom class names
      )}
      onClick={() => {
        // Toggle the state when the container is clicked
        handleToggle(!isToggled);
      }}
    >
      <input
        type="checkbox" // Hidden checkbox used for accessibility
        value="" // Value attribute is empty since the checkbox state is managed by React
        className="sr-only peer" // Screen reader only class for accessibility
        checked={isToggled} // Sets the checkbox checked state based on the toggle state
        onChange={(e) => {
          // Handle checkbox state changes
          handleToggle(e.target.checked);
        }}
      />
      <span
        className={twMerge(
          // Styling for the toggle indicator
          "w-5 h-5 rounded-full",
          isToggled ? "bg-primary-background" : "bg-disabled-text", // Background color based on the toggle state
          isToggled ? spinActiveClass : spinClass // Conditional spin animation class
        )}
      />
    </div>
  );
};

export default Toggle; // Export the Toggle component for use in other parts of the application
