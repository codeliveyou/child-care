import react from "react"
import { useLocation } from "react-router-dom";
import RoomCreateOnboarding1 from "./Onboarding/RoomCreateOnboarding1";
import RoomCreateOnboarding2 from "./Onboarding/RoomCreateOnboarding2";
import RoomCreateOnboarding3 from "./Onboarding/RoomCreateOnboarding3";
import RoomCreateOnboarding4 from "./Onboarding/RoomCreateOnboarding4";

const RoomCreateOnboardingMain = () => {
    const location = useLocation();
    const hash = location.hash;
    
    switch (hash) {
        case '#1':
            return <RoomCreateOnboarding1 />;
        case '#2':
            return <RoomCreateOnboarding2 />;
        case '#3':
            return <RoomCreateOnboarding3 />;
        case '#4':
            return <RoomCreateOnboarding4 />;
        default:
            return <RoomCreateOnboarding1 />;
    }
}

export default RoomCreateOnboardingMain;