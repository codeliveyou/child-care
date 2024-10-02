import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from react-router-dom for navigation
import { motion } from "framer-motion"; // Importing motion for animation effects

import Input from "../../components/common/Input"; // Custom Input component
import Button from "../../components/common/Button"; // Custom Button component
import TradeMark from "../../components/user/TradeMark"; // TradeMark component for branding

const PatientLogin = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  return (
    <div className="w-full h-full grid grid-cols-9 bg-white rounded-lg overflow-hidden">
      {/* Animated div for the left side of the login form */}
      <motion.div
        initial={{ x: 480 }} // Initial animation state
        animate={{ x: 0 }} // Final animation state
        transition={{ duration: 0.6 }} // Duration of the animation
        className="py-4 px-8 col-span-5 bg-white"
      >
        <div className="relative h-full">
          <TradeMark className="absolute top-2.5 left-0 font-extrabold text-xl leading-6 !text-primary-background" />
          {/* Centered content for patient login */}
          <div className="h-full flex items-center justify-center">
            <div className="max-w-[250px] w-full flex flex-col">
              <div className="flex flex-col gap-y-2">
                {/* Displaying heading text for the patient room */}
                <p className="font-extrabold text-2xl text-primary-text">
                  Patient rum
                </p>
                {/* Input field for room ID or personal number */}
                <Input
                  name="roomID"
                  placeholder="Rum-ID eller Perssonnumer"
                  className="border border-primary-border/25 text-primary-placeholder bg-white/30"
                />
              </div>
              {/* Button to navigate to the patient page */}
              <Button
                className="mt-5 border border-primary-border/25"
                onClick={() => {
                  navigate("/patient"); // Navigate to the patient page when clicked
                }}
              >
                Delta
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Animated div for the right side of the login form with additional info */}
      <motion.div
        initial={{ x: -550 }} // Initial animation state
        animate={{ x: 0 }} // Final animation state
        transition={{ duration: 0.6 }} // Duration of the animation
        className="py-7 px-11 col-span-4 bg-primary-background"
      >
        <div className="relative h-full">
          {/* Button to navigate back to the sign-in page */}
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            className="absolute bottom-0 right-0"
            onClick={() => {
              navigate("/auth/sign-in"); // Navigate to sign-in page when clicked
            }}
          >
            Tillbaka
          </Button>
          {/* Content area explaining the purpose of the page */}
          <div className="pr-10 h-full flex flex-col justify-center gap-y-3">
            <p className="font-extrabold text-[32px] leading-10 text-white">
              Patient rum
            </p>
            <div className="py-4 text-base leading-5">
              <p className="text-focused-background">
                Denna sida är avsedd för patienter eller personer som får vård
                genom vår tjänst.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PatientLogin; // Exporting the PatientLogin component as default
