import { useEffect, useMemo, useRef, useState } from "react";
import { FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import Dialog from "../common/Dialog";

// Type definition for VideoDialog props
type VideoDialogProps = {
  open: boolean; // Whether the dialog is open
  source: string;
  title: string;
  date: string;
  onClose: () => void; // Function to call when closing the dialog
};

// VideoDialog component
const VideoDialog = ({ open, source, title, date, onClose }: VideoDialogProps) => {
  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  // State to keep track of current playback time
  const [currentTime, setCurrentTime] = useState<number>(0);
  // State to keep track of the total length of the video
  const [totalLength, setTotalLength] = useState<number>(1);
  // State to check if the video is currently playing
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // State for mute/unmute
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Memoized label for the current playback time
  const timeLabel = useMemo(() => {
    const mins = Math.floor(currentTime / 60);
    const secs = Math.floor(currentTime % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, [currentTime]);

  // Function to handle play/pause button clicks
  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted); // Update state based on the muted property
    }
  };

  // Effect to handle video element setup and event listeners
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && open) {
      const handleLoadedMetadata = () => setTotalLength(videoElement.duration || 1);
      const handleTimeUpdate = () => setCurrentTime(videoElement.currentTime || 0);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);

      if (open) {
        videoElement.load();
        setCurrentTime(0);
      }

      return () => {
        videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
      };
    }
  }, [open]); // Empty dependency array to run effect only once

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      className="relative rounded-lg overflow-hidden"
    >
      <div className="relative w-full h-fit">
        {/* Display a placeholder image when video hasn't started */}
        {/* Video element */}
        <video
          ref={videoRef}
          src={source}
          className="w-full"
          controls={false}
        />
      </div>
      <div className="absolute top-0 py-2 px-4 flex justify-between items-center w-full">
        {/* Title and close button */}
        <p className="text-xl leading-6 text-white">{title}</p>
        <div className="flex gap-x-3 items-center">
          <p className="text-sm leading-4 text-light-background font-normal">
            {date}
          </p>
          <span
            className="w-6 h-6 flex items-center justify-center text-white text-xl cursor-pointer"
            onClick={onClose} // Close dialog when clicked
          >
            <FaTimes />
          </span>
        </div>
      </div>
      <div className="absolute w-full bg-primary-gradient px-4 py-[18px] flex items-center left-0 bottom-0 gap-x-2.5">
        {/* Play/Pause button */}
        <div className="py-0.5 px-2">
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer text-white text-xl"
            onClick={handlePlayPauseClick} // Toggle play/pause when clicked
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
          </span>
        </div>
        {/* Current playback time label */}
        <div className="px-1 w-11">
          <p className="text-white text-xs leading-4">{timeLabel}</p>
        </div>
        {/* Playback progress bar */}
        <div className="grow h-1.5 rounded-lg bg-primary-text relative">
          <div
            style={{ width: `${(currentTime / totalLength) * 100}%` }}
            className="h-full absolute left-0 top-0 bg-light-background rounded-lg z-50"
          ></div>
        </div>
        {/* Volume and fullscreen buttons */}

        {/* <div className="flex py-0.5 px-2 gap-x-2.5">
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <img src="/icons/video/volumn.svg" alt="Volume icon" />
          </span>
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <img src="/icons/video/fullscreen.svg" alt="Fullscreen icon" />
          </span>
        </div> */}
        {/* <div className="flex py-0.5 px-2 gap-x-2.5">
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={handleMuteToggle} // Mute/unmute toggle
          >
            <img
              src={isMuted ? "/icons/video/mute.svg" : "/icons/video/volume.svg"}
              alt="Mute/Unmute icon"
            />
          </span>
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <img src="/icons/video/fullscreen.svg" alt="Fullscreen icon" />
          </span>
        </div> */}
        <div className="flex py-0.5 px-2 gap-x-2.5">
          {/* Mute/Unmute Button */}
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer text-white text-xl"
            onClick={handleMuteToggle}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </span>
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <img src="/icons/video/fullscreen.svg" alt="Fullscreen icon" />
          </span>
        </div>
      </div>
    </Dialog>
  );
};

export default VideoDialog;
