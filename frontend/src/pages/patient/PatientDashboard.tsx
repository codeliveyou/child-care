import SignOutButton from "../../components/layout/header/SignOutButton";
import TradeMark from "../../components/user/TradeMark";

function PatientDashboard() {
  return (
    <div className="relative p-4 w-full h-full overflow-hidden">
      <img
        src="/images/patient/background.png"
        alt="Patient background"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto -z-10"
      />
      <div className="w-full flex items-center justify-between">
        <TradeMark className="font-extrabold text-white text-[32px] leading-10" />
        <SignOutButton redirectUri="/auth/patient-signin" />
      </div>
    </div>
  );
}

export default PatientDashboard;
