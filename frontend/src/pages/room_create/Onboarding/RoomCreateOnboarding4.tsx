import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import TradeMark from "../../../components/user/TradeMark";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MeetingContext } from "../../../MeetingContext";

interface LocationState {
  roomName: string;
  patientName: string;
  patientPersonalID: string;
  avatarName: string;
}

const API_LOCATION = "http://localhost:8000";

const RoomCreateOnboarding4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stateParams = location.state as LocationState;
  // const [username, setUsername] = useState("");
  // const [meetinginfo, setMeetingInfo] = useState({});
  const [meetingCreated, setMeetingCreated] = useState(false);
  const [roomName, setRoomName] = useState<string>("");


  const meteredMeeting = useContext(MeetingContext);

  useEffect(() => {
    if (meetingCreated && roomName) {
      localStorage.setItem("roomName", roomName);
      localStorage.setItem("username", stateParams.patientName);
      navigate(`/room/${roomName}`);
      // navigate(`/room/${roomName}`, {
      //   state: {roomName: roomName, username: stateParams.patientName}
      // });
    }
  }, [meetingCreated]);

  async function handleCreateMeeting(username: string) {
    // Calling API to create room
    const { data } = await axios.post(API_LOCATION + `/api/create/room`,{
      username,
    });
    // Calling API to fetch Metered Domain
    const response = await axios.get(API_LOCATION + "/api/metered-domain");
    // Extracting Metered Domain and Room Name
    // From responses.

    const METERED_DOMAIN = response.data.METERED_DOMAIN;
    const meetingRoomName = data.roomName;
    
    // Calling the join() of Metered SDK
    const joinResponse = await meteredMeeting.join({
      name: username,
      roomURL: METERED_DOMAIN + "/" + meetingRoomName,
    });

    if(joinResponse) {}

    // setUsername(username);
    setRoomName(meetingRoomName);
    // setMeetingInfo(joinResponse);
    setMeetingCreated(true);
    // setMeetingJoined(true);
  }

  return (
    <motion.div
      initial={{ y: 30, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        bounceDamping: 0.8,
        bounce: 0.2,
        duration: 0.7,
      }}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="py-6 px-8 max-w-[525px] bg-primary-background rounded-xl">
        <div className="w-full flex flex-col items-center gap-y-3">
          {/* Branding component */}
          <TradeMark className="pb-6 text-xl leading-6 self-start" />

          {/* Main title and subtitle */}
          <div className="font-extrabold text-center text-[32px] leading-10 text-white">
            <p>Noah rum</p>
            <p>är redo att användas.</p>
          </div>

          {/* Instruction text */}
          <p className="px-8 text-center text-lg leading-6 text-focused-background">
            Siffrorna nedan hjälper dig att bjuda in en patient eller moderator
            till det här rummet.
          </p>

          {/* Patient ID and Guest ID input fields */}
          <div className="flex flex-col items-center gap-y-2.5 px-12">
            {/* Patient ID input field */}
            <div className="w-full flex items-center justify-end gap-x-2.5">
              <p className="text-lg leading-6 text-light-background">
                Patient ID:
              </p>
              <div className="relative">
                <Input
                  name="patientID"
                  placeholder="#123445456546"
                  className="border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text rounded-2xl"
                />
                {/* Copy icon for patient ID */}
                <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                  <img src="/icons/copy.svg" alt="Copy icon" />
                </span>
              </div>
            </div>

            {/* Guest ID input field */}
            <div className="w-full flex items-center justify-end gap-x-2.5">
              <p className="text-lg leading-6 text-light-background">
                Gäst ID:
              </p>
              <div className="relative">
                <Input
                  name="guestID"
                  placeholder="#234234fdf2345"
                  className=" border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text rounded-2xl"
                />
                {/* Copy icon for guest ID */}
                <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                  <img src="/icons/copy.svg" alt="Copy icon" />
                </span>
              </div>
            </div>
          </div>

          {/* Button to finalize the onboarding process */}
          <div className="pt-4 flex justify-center">
            <Button
              size="compress"
              color="secondary"
              onClick={() => {
                handleCreateMeeting(stateParams.patientName);
                // setMeetingCreated(true);
                // navigate(`/room/${stateParams.roomName}`, {
                //   state:  {roomName: roomName, username: stateParams.patientName} ,
                // }); 
              }}
            >
              Klart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCreateOnboarding4;
