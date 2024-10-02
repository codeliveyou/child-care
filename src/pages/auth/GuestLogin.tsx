import { useNavigate } from "react-router-dom";
import {
  // BlockquoteHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import TradeMark from "../../components/user/TradeMark";
import { MeetingContext } from "../../MeetingContext";


interface TrackItem {
  streamId: string;
  track: MediaStreamTrack;
  type: "audio" | "video";
  participantSessionId: string;
}

interface Participant {
  _id: string;
  name: string;
}

const GuestLogin = () => {
  // useNavigate hook to programmatically navigate between routes
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  // const [meetinginfo, setMeetingInfo] = useState<any>({});
  // const [meetingjoined, setMeetingJoined] = useState<boolean>(false);

  const [remoteTracks, setRemoteTracks] = useState<TrackItem[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<Participant[]>([]);
  const [localVideoStream, setLocalVideoStream] = useState<MediaStream | null>(
    null
  );

  if (remoteTracks && onlineUsers && localVideoStream) {
  }

  const meteredMeeting = useContext(MeetingContext);

  async function handleClick() {
    // navigate("/guest", {
    //   state: { guestname: username, roomname: roomName },
    // }); // Navigates to the guest route
    navigate(`/guest?${new URLSearchParams({ roomname: roomName, username })}`);
  }

  useEffect(() => {
    const handleRemoteTrackStarted = (trackItem: TrackItem) => {
      setRemoteTracks((prevTracks) => [...prevTracks, trackItem]);
    };

    const handleRemoteTrackStopped = (trackItem: TrackItem) => {
      setRemoteTracks((prevTracks) =>
        prevTracks.filter((track) => track.streamId !== trackItem.streamId)
      );
    };

    const hanldeParticipantJoined = (participant: Participant) => {
      if (participant) {
      }
    };

    const handleParticipantLeft = (participant: Participant) => {
      // Handle participant left
      if (participant) {
      }
    };

    const handleOnlineParticipants = (onlineParticipants: Participant[]) => {
      setOnlineUsers(onlineParticipants);
    };

    const handleLocalTrackUpdated = (item: TrackItem) => {
      const stream = new MediaStream([item.track]);
      setLocalVideoStream(stream);
    };

    meteredMeeting.on("remoteTrackStarted", handleRemoteTrackStarted);
    meteredMeeting.on("remoteTrackStopped", handleRemoteTrackStopped);
    meteredMeeting.on("participantJoined", hanldeParticipantJoined);
    meteredMeeting.on("participantLeft", handleParticipantLeft);
    meteredMeeting.on("onlineParticipants", handleOnlineParticipants);
    meteredMeeting.on("localTrackUpdated", handleLocalTrackUpdated);

    return () => {
      meteredMeeting.removeListener("remoteTrackStarted");
      meteredMeeting.removeListener("remoteTrackStopped");
      meteredMeeting.removeListener("participantJoined");
      meteredMeeting.removeListener("participantLeft");
      meteredMeeting.removeListener("onlineParticipants");
      meteredMeeting.removeListener("localTrackUpdated");
    };
  });

  return (
    <div className="w-full h-full grid grid-cols-9 bg-white rounded-lg overflow-hidden">
      {/* Left section with animation for guest login form */}
      <motion.div
        initial={{ x: 480 }} // Animation starts with a horizontal offset
        animate={{ x: 0 }} // Animates to position 0 on the x-axis
        transition={{ duration: 0.6 }} // Duration of the animation
        className="py-4 px-8 col-span-5 bg-white"
      >
        <div className="relative h-full">
          {/* Trademark component positioned at the top-left */}
          <TradeMark className="absolute top-2.5 left-0 font-extrabold text-xl leading-6 !text-primary-background" />
          <div className="h-full flex items-center justify-center">
            <div className="max-w-[250px] w-full flex flex-col gap-y-2">
              <p className="font-extrabold text-2xl text-primary-text">
                Gäst konto
              </p>
              {/* Input field for guest name */}
              <Input
                name="name"
                placeholder="Gästnamn"
                className="border border-primary-border/25 text-primary-placeholder bg-white/30"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {/* Input field for guest key ID */}
              <Input
                name="keyID"
                placeholder="Nyckel ID"
                className="border border-primary-border/25 text-primary-placeholder bg-white/30"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
              {/* Button to navigate to guest page upon click */}
              <Button
                className="mt-4 border border-primary-border/25"
                onClick={handleClick}
              >
                Delta
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right section with animation for additional guest information */}
      <motion.div
        initial={{ x: -550 }} // Animation starts with a horizontal offset
        animate={{ x: 0 }} // Animates to position 0 on the x-axis
        transition={{ duration: 0.6 }} // Duration of the animation
        className="py-7 px-11 col-span-4 bg-primary-background"
      >
        <div className="relative h-full">
          {/* Button to navigate back to the sign-in page */}
          <Button
            size="small"
            className="absolute bottom-0 right-0 border border-white text-white"
            onClick={() => {
              navigate("/auth/sign-in"); // Navigates to the sign-in route
            }}
          >
            Tillbaka
          </Button>
          <div className="pr-10 h-full flex flex-col justify-center gap-y-3">
            <p className="font-extrabold text-[32px] leading-10 text-white">
              Gäst konto
            </p>
            <div className="py-4 text-base leading-5">
              <p className="text-focused-background">
                Ett konto genom vilket den besökande parten kan vara närvarande
                under tillhandahållandet av tjänster, samt delta i arbetet med
                patienten. Förutsatt att användaren ger sitt tillstånd till det
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GuestLogin;
