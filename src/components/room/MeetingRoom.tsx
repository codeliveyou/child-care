import VideoTag from "./VideoTag";
import ActionButton from "../common/ActionButton";

interface MeetingProps {
  handleMicBtn: () => void;
  handleCameraBtn: () => void;
  handelScreenBtn: () => void;
  handleLeaveBtn: () => void;
  localVideoStream: MediaStream | null;
  onlineUsers: Array<{
    _id: string;
    name: string;
  }>;
  remoteTracks: Array<{
    participantSessionId: string;
    streamId: string;
    type: "video" | "audio";
    track: MediaStreamTrack;
  }>;
  username: string;
  roomName: string;
  meetingInfo: {
    participantSessionId: string;
  };
  micShared: boolean;
  cameraShared: boolean;
  screenShared: boolean;
}

function MeetingRoom({
  handleMicBtn,
  handleCameraBtn,
  handelScreenBtn,
  handleLeaveBtn,
  localVideoStream,
  onlineUsers,
  remoteTracks,
  // username,
  roomName,
  meetingInfo,
  micShared,
  cameraShared,
  screenShared,
}: MeetingProps) {
  let userStreamMap: { [key: string]: Array<(typeof remoteTracks)[0]> } = {};
  for (let trackItem of remoteTracks) {
    if (!userStreamMap[trackItem.participantSessionId]) {
      userStreamMap[trackItem.participantSessionId] = [];
    }
    userStreamMap[trackItem.participantSessionId].push(trackItem);
  }

  let remoteParticipantTags: JSX.Element[] = [];
  for (let user of onlineUsers) {
    // Skip if self
    if (user._id === meetingInfo.participantSessionId) {
      continue;
    }
    let videoTags: JSX.Element[] = [];
    if (userStreamMap[user._id] && userStreamMap[user._id].length > 0) {
      let hasVideo = false;
      // User has remote tracks
      for (let trackItem of userStreamMap[user._id]) {
        let stream = new MediaStream();
        stream.addTrack(trackItem.track);

        if (trackItem.type === "video") {
          hasVideo = true;
          videoTags.push(
            <VideoTag key={trackItem.streamId} srcObject={stream} />
          );
        }

        if (trackItem.type === "audio") {
          videoTags.push(
            <VideoTag
              key={trackItem.streamId}
              srcObject={stream}
              // style={{ display: "none" }}
            />
          );
        }
      }

      if (!hasVideo) {
        videoTags.push(
          <div
            key={`${user._id}-audio-placeholder`}
            className="w-40 h-30 flex items-center justify-center bg-black text-white"
          >
            Audio Only
          </div>
        );
      }
    }

    remoteParticipantTags.push(
      <div key={user._id}>
        <div id="remoteVideos">{videoTags}</div>
        <div id="username" className="bg-black text-white text-center">
          {user.name}
        </div>
      </div>
    );
  }

  return (
    <div
      id="meetingView"
      className="relative flex flex-col w-full h-full h-min-30"
    >
      <div className="h-8 text-center bg-black">MeetingID: {roomName}</div>
      <div className="h-full flex flex-row">
        <div className="relative w-full h-full">
          <div
            className="w-full h-full grid grid-cols-4 grid-rows-2 gap-2 p-2"
            id="remotePartificpantContainer"
          >
            {remoteParticipantTags.map((participant, index) => (
              <div
                key={index}
                className="relative bg-black rounded-lg overflow-hidden"
              >
                {participant}
              </div>
            ))}
          </div>

          <div className="absolute top-2 right-2 w-60 h-1/2 bg-base-300 rounded-lg overflow-hidden shadow-lg">
            {localVideoStream ? (
              <VideoTag
                id="meetingAreaLocalVideo"
                muted={true}
                srcObject={localVideoStream}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-700">
                <span className="text-white">No Video</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute w-full flex justify-center bottom-2 space-x-4">
        <ActionButton className="rounded-full bg-white" onClick={handleMicBtn}>
          {micShared ? (
            <img
              src="https://img.icons8.com/material-rounded/24/microphone.png"
              alt="microphone"
              className="w-6 h-6"
            />
          ) : (
            <img
              src="https://img.icons8.com/material/50/no-microphone.png"
              alt="no-microphone"
              className="w-6 h-6"
            />
          )}
        </ActionButton>

        <ActionButton
          className="rounded-full bg-white"
          onClick={handleCameraBtn}
        >
          {cameraShared ? (
            <img
              src="https://img.icons8.com/material-outlined/50/video-call.png"
              alt="video-call"
              className="w-6 h-6"
            />
          ) : (
            <img
              src="https://img.icons8.com/material-outlined/50/no-video.png"
              alt="no-video"
              className="w-6 h-6"
            />
          )}
        </ActionButton>

        <ActionButton
          className={`rounded-full ${
            screenShared ? "bg-orange-200" : "bg-white"
          }`}
          onClick={handelScreenBtn}
        >
          {screenShared ? (
            <img
              src="https://img.icons8.com/material/50/imac.png"
              alt="imac"
              className="w-6 h-6"
            />
          ) : (
            <img
              src="https://img.icons8.com/material/50/imac.png"
              alt="imac"
              className="w-6 h-6 "
            />
          )}
        </ActionButton>

        <ActionButton
          className="rounded-full bg-white"
          onClick={handleLeaveBtn}
        >
          <img
            src="https://img.icons8.com/material-outlined/50/export.png"
            alt="export"
            className="w-6 h-6"
          />
        </ActionButton>
      </div>
    </div>
  );
}

export default MeetingRoom;
