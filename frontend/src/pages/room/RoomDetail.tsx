// src/RoomDetail.tsx

import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import Input from "../../components/common/Input";
import ChatItem from "./components/ChatItem";

import SendSVG from "../../assets/send.svg?react";
import RoomCall from "../../components/room/RoomCall";
import ShareDialog from "../../components/room/ShareDialog";
import ActionButton from "../../components/common/ActionButton";

import { io, Socket } from "socket.io-client";

import {
  // Role,
  User,
  ChatRequest,
  Message,
  // ChatRoom,
  // InitResponse,
  RoomMessage,
  ChatApproved,
  ChatStarted,
  ChatDenied,
  ChatRequestData,
  // ChatHistory,
} from "./types"; // Adjust the path as necessary
// import { RiPlayReverseLine } from "react-icons/ri";
import axios from "axios";

interface ITabItem {
  title: string; // Title of the tab
  key: string; // Unique key for the tab
}

// Tab items for switching between patient and guest views
const tabItems: ITabItem[] = [
  {
    title: "Patient",
    key: "patient",
  },
  {
    title: "Gäst",
    key: "guest",
  },
];

const API_LOCATION = "http://localhost:8000";

const RoomPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: roomName } = useParams();
  const [searchParams] = useSearchParams();
  const pathname = location.pathname;
  const receiver_role = searchParams.get("message") as string;
  const receiver = searchParams.get("user") as string;
  const myname = localStorage.getItem("username") || "";

  const [activePanel, setActivePanel] = useState<string>("patient"); // "patient" or "guest"
  const [messageList, setMessageList] = useState<Message[]>([]); // Array of chat messages
  const [activeUser, setActiveUser] = useState<User>({
    sid: "",
    username: "John Doe",
    role: "creator",
  }); // Active chat user
  const [shareDialogOpen, setShareDialogOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // Socket.IO states
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const [chatRequests, setChatRequests] = useState<ChatRequest[]>([]); // For Room Creator
  const [roomInfo, setRoomInfo] = useState<any>({});

  if (roomInfo && chatRequests && loading) {}

  // Function to handle tab click
  const handleTabItemClick =
    (tabItem: { title: string; key: string }) => () => {
      setActivePanel(tabItem.key);
      navigate(`${pathname}?${new URLSearchParams({ message: tabItem.key})}`);
      setActiveUser({
        sid: "",
        username: activeUser.username,
        role: tabItem.key === "patient" ? "patient" : "guest",
      });
    };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  // Function to send messages
  const sendMessage = () => {
    // Role-based restriction
    if (activeUser.role === "guest" && activePanel === "patient") {
      alert("Guests can't chat directly with patients.");
      return;
    }

    // Check if the message is not empty
    if (message.trim() === "") {
      // alert("Message cannot be empty");
      return;
    }

    // Create a new message object
    const newMessage: Message = {
      from: myname,
      to: receiver,
      role: receiver_role,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Update the message list state
    if (receiver == null)
      alert("Select one user for chat...")
    else
      setMessageList((prevList) => [...prevList, newMessage]);
    // Emit the message via Socket.IO
    if (socketInstance) {
      socketInstance.emit("room_message", {
        room_id: roomName, // Assuming room_id is activeUser.sid; adjust as per backend
        from: myname,
        to: receiver,
        role: receiver_role,
        message: message.trim(),
      });
    }

    // Clear the input field
    setMessage("");
  };

  // Socket initialization
  useEffect(() => {
    const socket: Socket = io(API_LOCATION, {
      transports: ["websocket"],
      // Removed 'cors' as it's handled server-side
    });

    // Set the socket instance
    setSocketInstance(socket);

    // Emit 'init' event upon connection
    socket.on("connect", () => {
      setLoading(false);
      setActiveUser((prevUser) => ({
        ...prevUser,
        sid: socket.id ? socket.id : "",
      }));
      // Emit init with username and role
      socket.emit("init", {
        username: myname,
        role: "creator",
        roomName: roomName,
      });
    });

    // Listen for 'init_response'
    // socket.on("init_response", (data: InitResponse) => {
    //   setAllUsers(data.users);
    // });

    // Listen for 'user_disconnected'
    // socket.on(
    //   "user_disconnected",
    //   (data: { sid: string; username: string }) => {
    //     setAllUsers((prevUsers) =>
    //       prevUsers.filter((user) => user.sid !== data.sid)
    //     );
    //     // Optionally, remove messages from messageList if necessary
    //   }
    // );

    // Listen for 'room_message'
    // socket.on("room_message", (data: RoomMessage) => {
    //   const { room, from, to, role, message, timestamp } = data;
    //   const newMessage: Message = {
    //     from: from === socket.id ? "me" : from,
    //     to: receiver,
    //     role: role,
    //     message,
    //     timestamp,
    //     // role: activeUser.role,
    //   };
    //   setMessageList((prevList) => [...prevList, newMessage]);
    // });

    // Listen for 'chat_approved' and 'chat_started' to handle room creation
    socket.on("chat_approved", (data: ChatApproved) => {
      const { room_id, patient_sid, guest_sid } = data;
      console.log(
        `Chat approved: Room ID ${room_id} between ${patient_sid} and ${guest_sid}`
      );
      // Optionally, set activeUser based on the role
      const target_sid =
        activeUser.role === "creator" ? patient_sid : guest_sid;
      setActiveUser((prevUser) => ({ ...prevUser, sid: target_sid }));
      // Join the room
      socket.emit("join_room", { room_id });
      // Fetch chat history
      socket.emit("get_chat_history", { room_id });
    });

    socket.on("chat_started", (data: ChatStarted) => {
      const { room_id, guest_sid } = data;
      console.log(`Chat started: Room ID ${room_id} with ${guest_sid}`);
      setActiveUser((prevUser) => ({ ...prevUser, sid: guest_sid }));
      // Join the room
      socket.emit("join_room", { room_id });
      // Fetch chat history
      socket.emit("get_chat_history", { room_id });
    });

    // Listen for 'chat_denied'
    socket.on("chat_denied", (data: ChatDenied) => {
      alert(data.msg);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection Error:", error);
      setLoading(false);
      // Optionally, notify the user about the connection issue
    });

    // Listen for 'chat_request' (Room Creator only)
    if (activeUser.role === "creator") {
      socket.on("chat_request", (data: ChatRequestData) => {
        console.log("Received chat request:", data);
        setChatRequests((prev) => [...prev, data]);
      });
    }

    // Listen for 'chat_history'
    // socket.on("chat_history", (data: ChatHistory) => {
    //   const { room_id, messages } = data;
    //   const formattedMessages: Message[] = messages.map((msg) => ({
    //     from: msg.sender_id === socket.id ? "me" : msg.sender_id,
    //     message: msg.message,
    //     timestamp: msg.timestamp,
    //     role: activeUser.role,
    //   }));
    //   setMessageList(formattedMessages);
    // });

    // Cleanup on component unmount or buttonStatus change
    return () => {
      socket.disconnect();
      setSocketInstance(null);
      setLoading(true);
    };
  }, []);

  // Display received message
  useEffect(() => {
    if (socketInstance) {
      socketInstance.on("room_message", (data: RoomMessage) => {
        const { from, message, to, timestamp } = data;
        const newMessage: Message = {
          from: from === socketInstance.id ? "me" : from,
          to: to,
          message,
          timestamp,
          role: activeUser.role,
        };
        if (from != myname)
          setMessageList((prevList) => [...prevList, newMessage]);
      });
    }
  }, [socketInstance]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.post(
          `${API_LOCATION}/rooms/fetch_room_data`,
          {
            roomName,
          }
        );
        setRoomInfo(response);
      } catch (err: any) {
        console.log("Error in fetching room data", err);
      }
    };

    fetchRoomData();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  // buttonStatus, activeUser.username, activeUser.role, activeUser.sid

  // const [allUsers, setAllUsers] = useState<User[]>([]); // List of all connected users

  return (
    <>
      <motion.div
        className="w-full h-full flex gap-x-4 text-primary-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left panel containing call controls and chat */}
        <div className="grow pt-2 h-full flex flex-col gap-y-4">
          <div className="py-2 flex justify-between items-center">
            {/* Back button to navigate to rooms */}
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => {
                navigate("/rooms");
              }}
            >
              <span className="w-6 h-6 flex items-center justify-center">
                <FaChevronLeft />
              </span>
              <p className="text-xl leading-6">Tillbaka</p>
            </div>

            {/* Room title and date */}
            <div className="flex flex-col items-end gap-y-1">
              <p className="font-bold text-xl leading-5 text-primary-background">
                Elsas rum
              </p>
              <p className="text-sm leading-4">2 Mars, 2024</p>
            </div>
          </div>

          {/* Video call component with share functionality */}
          <RoomCall className="grow" onShare={() => setShareDialogOpen(true)} />

          {/* Chat and files sections */}
          <div className="grid grid-cols-2 gap-4">
            {/* Chat section with patient */}
            <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
              <div className="pb-2 border-b-2 border-b-light-background">
                <p className="text-xl leading-6 font-bold">Chatt med patient</p>
              </div>
              <ul className="list-disc pl-5 py-5 text-primary-text/50">
                <li>Tillgång till patient chatt</li>
                <li>Förmåga att skriva AI-prompt</li>
              </ul>
              <div className="flex gap-2 justify-end">
                {/* Buttons for chat actions */}
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  L
                </button>
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  A
                </button>
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  S
                </button>
                <button className="rounded-lg bg-white text-[#B6C2E1] w-8 h-8 text-2xl border-[#B6C2E1] border">
                  +
                </button>
              </div>
            </div>

            {/* Files section related to patient */}
            <div className="bg-white rounded-lg p-5 flex flex-col gap-2">
              <div className="pb-2 border-b-2 border-b-light-background">
                <p className="text-xl leading-6 font-bold">Filer av patient</p>
              </div>
              <ul className="list-disc pl-5 py-5 text-primary-text/50">
                <li>Gäst kan se patientfiler</li>
                <li>Gäst kan lägga till filer och se patientinformation</li>
              </ul>
              <div className="flex gap-2 justify-end">
                {/* Buttons for file actions */}
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  L
                </button>
                <button className="rounded-lg bg-white text-[#B6C2E1] w-8 h-8 text-2xl border-[#B6C2E1] border">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel for tab controls and chat messages */}
        <div className="p-2 flex flex-col gap-2.5 bg-white rounded-2xl w-80">
          {/* Tab controls for switching between patient and guest views */}
          <div className="p-2 grid grid-cols-2 gap-x-2 bg-[#E9E9F3] rounded-xl font-bold text-lg">
            {tabItems.map((tabItem, index) => (
              <button
                key={index}
                className={twMerge(
                  "p-2 flex-1 flex items-center justify-center gap-2",
                  activePanel === tabItem.key &&
                    "bg-white rounded-xl text-primary-background"
                )}
                onClick={handleTabItemClick(tabItem)}
              >
                <p>{tabItem.title}</p>
                {tabItem.key === "guest" && (
                  <span className="rounded-lg text-white px-2 py-0 font-thin text-base bg-primary-background">
                    { receiver ? receiver.charAt(0).toUpperCase() : (<></>)}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Display chat messages */}
          <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto">
            {messageList
              .filter((msg) => {
                // Adjust filters based on role and active panel
                if (receiver_role !== msg.role ) {
                  return false;
                }
                if ((msg.from === myname && msg.to === receiver ) || (msg.from === receiver && msg.to === "creator" ))
                  return true;
              })
              .map((msg, index) => (
                <ChatItem
                  key={index}
                  name={msg.from === myname ? "Me" : msg.from}
                  role={msg.from === myname ? "me" : msg.role}
                  content={msg.message}
                  // timestamp={msg.timestamp}
                />
              ))}
          </div>

          {/* Input field for sending messages */}
          <div className="flex gap-2 m-2">
            <Input
              name="message"
              value={message}
              placeholder="Skriv ett meddelande"
              className="flex-1 h-12 px-5 !py-[12.5px] bg-light-background border-none text-base"
              onChange={handleInputChange}
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
      </motion.div>

      {/* Dialog for sharing options */}
      <ShareDialog
        open={shareDialogOpen}
        animation={"to-left"}
        onClose={() => setShareDialogOpen(false)}
      />
    </>
  );
};

export default RoomPage;
