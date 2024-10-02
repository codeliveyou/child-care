import SignOutButton from "../../components/layout/header/SignOutButton";
import TradeMark from "../../components/user/TradeMark";

// Functional component for the Patient Dashboard
function PatientDashboard() {
  return (
    <div className="relative p-4 w-full h-full overflow-hidden">
      {/* Background image for the patient dashboard */}
      <img
        src="/images/patient/background.png"
        alt="Patient background"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto -z-10"
      />
      <div className="w-full flex items-center justify-between">
        {/* Trademark component displayed with specific styling */}
        <TradeMark className="font-extrabold text-white text-[32px] leading-10" />
        {/* Sign out button with redirect URI to patient sign-in page */}
        <SignOutButton redirectUri="/auth/patient-signin" />
      </div>
    </div>
  );
}

export default PatientDashboard;
