import { useNavigate } from "react-router-dom"; // Import hook to navigate programmatically within the app
import TradeMark from "../../components/user/TradeMark"; // Import TradeMark component to display a logo or trademark
import Button from "../../components/common/Button"; // Import a reusable Button component

const LoginWithBank = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation, used to programmatically navigate to different routes

  return (
    <div className="py-4 px-8 w-full h-full bg-white rounded-lg"> {/* Main container for the login section with styling for padding, width, height, background color, and rounded corners */}
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-y-2"> {/* Centered flex container for layout with space between items */}
        <TradeMark className="absolute top-0 left-0 font-extrabold text-xl leading-6 !text-primary-background" /> {/* Trademark component positioned at the top left with specific text styles */}
        <div className="max-w-[250px] flex flex-col gap-y-2"> {/* Container for the login heading and QR code, with max width and gap between elements */}
          <div className="flex flex-col font-extrabold text-2xl leading-8 text-center"> {/* Heading text container, styled to be bold, centered, and larger */}
            <p>Logga in</p> {/* Heading: "Log in" in Swedish */}
            <p>med Bank ID</p> {/* Subheading: "with Bank ID" in Swedish */}
          </div>
          <div className="p-4 rounded-lg bg-white/30 border border-primary-border/25"> {/* Container for QR code, with padding, rounded corners, and border styling */}
            <div className="w-full aspect-square"> {/* Maintains square aspect ratio for the QR image */}
              <img
                src="/images/auth/qrcode.png"
                alt="Qr img" // Descriptive alt text for accessibility
                className="w-full h-full" // Image takes full width and height of the container
              />
            </div>
          </div>
        </div>
        <p className="text-[10px] leading-3 text-disabled-text"> {/* Small, secondary text below the QR code providing instructions */}
          För att bekräfta din identitet, skanna vänligen den bifogade QR-koden. {/* "To confirm your identity, please scan the attached QR code." in Swedish */}
        </p>
        <Button
          size="small"
          className="absolute bottom-3 right-1 !text-primary-text !bg-white border border-primary-border/25" // Button with custom positioning and styling
          onClick={() => {
            navigate("/auth/sign-in"); // Navigate to the sign-in page when button is clicked
          }}
        >
          Tillbaka {/* Button text: "Back" in Swedish */}
        </Button>
      </div>
    </div>
  );
};

export default LoginWithBank; // Exporting the LoginWithBank component for use in other parts of the application
