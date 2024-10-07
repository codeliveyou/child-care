import SignOutButton from "../../components/layout/header/SignOutButton";
import { twMerge } from "tailwind-merge";
import TradeMark from "../../components/user/TradeMark";
import { InitResponse, Message, RoomMessage } from "../room/types";
import { useContext, useEffect, useState } from "react";
import ChatItem from "../room/components/ChatItem";
import Input from "../../components/common/Input";
import { useSearchParams } from "react-router-dom";
import ActionButton from "../../components/common/ActionButton";
import SendSVG from "../../assets/send.svg?react";
import { useSocket } from "../../contexts/SocketContext";
import { MeetingContext } from "../../MeetingContext";
import axios from "axios";
import config from "../../config";
import MeetingRoom from "../../components/room/MeetingRoom";

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

// Functional component for the Patient Dashboard
function PatientDashboard() {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  const [searchParams] = useSearchParams();
  const roomName = searchParams.get("roomname") as string;

  const [micShared, setMicShared] = useState(false);
  const [cameraShared, setCameraShared] = useState(false);
  const [screenShared, setScreenShared] = useState(false);
  const [localVideoStream, setLocalVideoStream] = useState<MediaStream | null>(
    null
  );
  const [meetingEnded, setMeetingEnded] = useState(false);
  const [remoteTracks, setRemoteTracks] = useState<TrackItem[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<Participant[]>([]);
  const [meetingInfo, setMeetingInfo] = useState<any>({});
  const [meetingjoined, setMeetingJoined] = useState<boolean>(false);

  if (
    meetingEnded ||
    meetingjoined ||
    localVideoStream ||
    remoteTracks ||
    onlineUsers ||
    meetingInfo
  ) {
  }

  const { socketInstance } = useSocket();

  // Socket Initialization
  useEffect(() => {
    if (socketInstance) {
      socketInstance.on("connect", () => {
        socketInstance.emit("init", {
          username: "patient",
          role: "patient",
          roomName: roomName,
        });
      });

      socketInstance.on("init_response", (data: InitResponse) => {
        data;
      });
    }
  }, [socketInstance]);

  useEffect(() => {
    if (socketInstance) {
      const handleNewMessage = (data: RoomMessage) => {
        const { from, message, to, timestamp } = data;
        const newMessage: Message = {
          from: from === socketInstance.id ? "me" : from,
          to,
          message,
          timestamp,
          role: "patient",
        };
        if (to == "patient")
          setMessageList((prevList) => [...prevList, newMessage]);
      };
      socketInstance.on("room_message", handleNewMessage);
      return () => {
        socketInstance.off("room_message", handleNewMessage);
      };
    }
  }, [socketInstance, messageList]);

  const sendMessage = () => {
    // Check if the message is not empty
    if (message.trim() === "") {
      // alert("Message cannot be empty");
      return;
    }

    // Create a new message object
    const newMessage: Message = {
      from: "patient",
      to: "creator",
      role: "patient",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Update the message list state
    setMessageList((prevList) => [...prevList, newMessage]);

    // Emit the message via Socket.IO
    if (socketInstance) {
      socketInstance.emit("room_message", {
        room_id: roomName, // Assuming room_id is activeUser.sid; adjust as per backend
        from: "patient",
        to: "creator",
        role: "patient",
        message: message.trim(),
      });
    }

    // Clear the input field
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const meteredMeeting = useContext(MeetingContext);

  const handleMicBtn = async (): Promise<void> => {
    if (micShared) {
      await meteredMeeting.stopAudio();
      setMicShared(false);
    } else {
      await meteredMeeting.startAudio();
      setMicShared(true);
    }
  };

  const handleCameraBtn = async (): Promise<void> => {
    if (cameraShared) {
      await meteredMeeting.stopVideo();
      setLocalVideoStream(null);
      setCameraShared(false);
    } else {
      await meteredMeeting.startVideo();
      const stream = await meteredMeeting.getLocalVideoStream();
      setLocalVideoStream(stream);
      setCameraShared(true);
    }
  };

  const handleScreenBtn = async (): Promise<void> => {
    if (!screenShared) {
      await meteredMeeting.startScreenShare();
      setScreenShared(true);
    } else {
      await meteredMeeting.stopVideo();
      setCameraShared(false);
      setScreenShared(false);
    }
  };

  const handleLeaveBtn = async (): Promise<void> => {
    await meteredMeeting.leaveMeeting();

    const response = await axios.get(
      `${config.api.endpoint_uri}/api/room/end?roomName=${roomName}&userName=${"patient"}`
    );
    if (response) {
    }
    setMeetingEnded(true);
  };

  async function handleJoinMeeting(roomName: string, username: string) {
    roomName = roomName.trim();

    try {
      // Calling API to validate the roomName
      const response = await axios.get<{ roomFound: boolean }>(
        `${config.api.endpoint_uri}/api/validate-meeting?roomName=${roomName}`
      );
      if (response.data.roomFound) {
        // Calling API to fetch Metered Domain
        const { data } = await axios.get<{ METERED_DOMAIN: string }>(
          `${config.api.endpoint_uri}/api/metered-domain`
        );
        // Extracting Metered Domain from response
        const METERED_DOMAIN = data.METERED_DOMAIN;

        // Calling the join() of Metered SDK
        const joinResponse = await meteredMeeting.join({
          name: username,
          roomURL: `${METERED_DOMAIN}/${roomName}`,
        });

        const role = "patient";
        const joinResponseToBackend = await axios.get(
          `${config.api.endpoint_uri}/api/room/join?roomName=${roomName}&userName=${username}&role=${role}`
        );

        const uuid = joinResponseToBackend.data.uuid;
        if (uuid) {
        }
        // setUsername(username);
        // setRoomName(roomName);
        setMeetingInfo(joinResponse);
        setMeetingJoined(true);

        return true;
      } else {
        alert("Invalid roomName");
      }
    } catch (error) {
      console.error("Error joining meeting:", error);
      alert("An error occurred while joining the meeting. Please try again.");
    }
  }

  useEffect(() => {
    handleJoinMeeting(roomName, "patient");
    setMeetingJoined(true);
  }, []);

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
    // <div className="relative p-4 w-full h-full overflow-hidden">
    //   {/* Background image for the patient dashboard */}
    //   {/* <img
    //     src="/images/patient/background.png"
    //     alt="Patient background"
    //     className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto -z-10"
    //   /> */}
    //   <div className="w-full flex items-center justify-between">
    //     {/* Trademark component displayed with specific styling */}
    //     <TradeMark className="font-extrabold text-white text-[32px] leading-10" />
    //     {/* Sign out button with redirect URI to patient sign-in page */}
    //     <SignOutButton redirectUri="/auth/patient-signin" />
    //   </div>

    //   <div>
    //     <div className="w-full flex justify-end mt-2">
    //       <div className="p-2 h-full flex flex-col gap-2.5 bg-white rounded-2xl w-80 overflow-y-auto">
    //         <div className="p-2 grid grid-cols-2 gap-x-2 bg-light-background rounded-xl font-bold text-lg">
    //           <button
    //             className={twMerge(
    //               "p-2 flex-1 flex items-center justify-center gap-2"
    //             )}
    //           >
    //             <p className="font-semibold text-xl leading-6">Användare</p>
    //           </button>
    //         </div>

    //         {/* Chat items */}
    //         <div className="grow py-4 px-2 flex-1 flex flex-col gap-2.5 overflow-y-auto">
    //           {messageList.map((msg, index) => (
    //             <ChatItem
    //               key={index}
    //               name={msg.from === "patient" ? "Me" : msg.from}
    //               role={msg.from === "patient" ? "me" : msg.role}
    //               content={msg.message}
    //               // timestamp={msg.timestamp}
    //             />
    //           ))}
    //         </div>

    //         <div className="p-2 flex items-center gap-x-2.5">
    //           <Input
    //             name="message"
    //             placeholder="Skriva ett meddelande"
    //             className="grow h-12 w-12"
    //             value={message}
    //             onChange={(e) => setMessage(e.target.value)}
    //             onKeyPress={handleKeyPress}
    //           />
    //           <ActionButton
    //             className="bg-primary-background"
    //             onClick={sendMessage}
    //           >
    //             <SendSVG />
    //           </ActionButton>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="p-4 w-full h-full flex flex-col gap-y-2.5 bg-light-background">
        <div className="w-full flex items-center justify-between">
          <TradeMark className="font-extrabold text-[32px] leading-10 !text-primary-background" />
          {/* Notification and sign-out buttons */}
          <div className="flex items-center gap-2">
            
            <div className="p-0.5">
              <SignOutButton redirectUri="/auth/guest-signin" />{" "}
              {/* Button to sign out */}
            </div>
          </div>
        </div>
        <div className="grow flex gap-x-6 overflow-y-auto">          
          <div className="grow h-full flex gap-x-2.5">
            <div className="grow flex flex-col gap-y-2">
              <div className="py-2 flex flex-col items-center justify-center">
                <p className="font-semibold text-xl leading-6 text-primary-background">
                  Elsa rum
                </p>
                <p className="text-sm leading-4">2 Mars, 2024</p>
              </div>
              <div className="grow relative p-2.5 w-full flex justify-end rounded-lg overflow-hidden">
                <MeetingRoom
                  handleMicBtn={handleMicBtn}
                  handleCameraBtn={handleCameraBtn}
                  handelScreenBtn={handleScreenBtn}
                  handleLeaveBtn={handleLeaveBtn}
                  localVideoStream={localVideoStream}
                  onlineUsers={onlineUsers}
                  remoteTracks={remoteTracks}
                  username={"patient"}
                  roomName={roomName}
                  meetingInfo={meetingInfo}
                  micShared={micShared}
                  cameraShared={cameraShared}
                  screenShared={screenShared}
                />
              </div>
              
            </div>

            <div className="p-2 h-full flex flex-col gap-2.5 bg-white rounded-2xl w-80 overflow-y-auto">
              <div className="p-2 grid grid-cols-2 gap-x-2 bg-light-background rounded-xl font-bold text-lg">
                <button
                  className={twMerge(
                    "p-2 flex-1 flex items-center justify-center gap-2"
                  )}
                >
                  <p className="font-semibold text-xl leading-6">Användare</p>
                </button>
              </div>

              {/* Chat items */}
              <div className="grow py-4 px-2 flex-1 flex flex-col gap-2.5 overflow-y-auto">
                {messageList.map((msg, index) => (
                  <ChatItem
                    key={index}
                    name={msg.from === "patient" ? "Me" : msg.from}
                    role={msg.from === "patient" ? "me" : msg.role}
                    content={msg.message}
                    // timestamp={msg.timestamp}
                  />
                ))}
              </div>

              <div className="p-2 flex items-center gap-x-2.5">
                <Input
                  name="message"
                  placeholder="Skriva ett meddelande"
                  className="grow h-12 w-12"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <ActionButton
                  className="bg-primary-background"
                  onClick={sendMessage}
                >
                  <SendSVG />
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
}

export default PatientDashboard;
