import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

// Define the props for the TextField component
interface TextFieldProps {
  name: string; // The name attribute for the textarea element
  value?: string; // Optional value for the textarea
  placeholder?: string; // Optional placeholder text for the textarea
  className?: string; // Optional custom class names for additional styling
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void; // Optional callback for handling changes to the textarea
}

function TextField({
  name,
  value = "", // Default value is an empty string
  placeholder = "", // Default placeholder is an empty string
  className = "", // Default className is an empty string
  onChange, // Optional change handler
}: TextFieldProps) {
  return (
    <textarea
      rows={3} // Sets the number of rows for the textarea
      name={name} // Sets the name attribute for the textarea
      value={value} // Sets the value of the textarea
      placeholder={placeholder} // Sets the placeholder text
      className={twMerge(
        // Merge Tailwind CSS classes with optional additional class names
        "rounded-lg placeholder:text-primary-text bg-light-background py-2 px-4 font-light text-sm leading-4 outline-none",
        className
      )}
      onChange={onChange} // Event handler for changes to the textarea
    />
  );
}

export default TextField; // Export the TextField component for use in other parts of the application
