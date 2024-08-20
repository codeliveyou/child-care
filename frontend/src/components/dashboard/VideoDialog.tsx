import { useEffect, useMemo, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import Dialog from "../common/Dialog";

type VideoDialogProps = {
  open: boolean;
  onClose: () => void;
};
const VideoDialog = ({ open, onClose }: VideoDialogProps) => {
  if (!open) return;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalLength, setTotalLength] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const timeLabel = useMemo(() => {
    const mins = Math.floor(currentTime / 60);
    const secs = currentTime % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, [currentTime]);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setTotalLength(videoRef.current.duration);
      videoRef.current.addEventListener("play", () => {
        setIsPlaying(true);
        setTotalLength(videoRef.current?.duration || 1);
      });
      videoRef.current.addEventListener("pause", () => {
        setIsPlaying(false);
      });
      videoRef.current.addEventListener("ended", () => {
        setCurrentTime(0);
      });
      videoRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(Math.floor(videoRef.current?.currentTime || 0));
      });
    }
  }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      className="relative rounded-lg overflow-hidden"
    >
      <div className="relative w-full h-fit">
        {currentTime === 0 && (
          <img
            src="/images/video/popup.png"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full"
          />
        )}
        <video
          ref={videoRef}
          src="https://villagefinds.com/assets/customer/videos/hero.mp4"
          className="w-full"
        />
      </div>
      <div className="absolute top-0 py-2 px-4 flex justify-between items-center w-full">
        <p className="text-xl leading-6 text-white">Noah möte</p>
        <div className="flex gap-x-3 items-center">
          <p className="text-sm leading-4 text-light-background font-normal">
            Igår 11:25
          </p>
          <span
            className="w-6 h-6 flex items-center justify-center text-white text-xl cursor-pointer"
            onClick={onClose}
          >
            <FaTimes />
          </span>
        </div>
      </div>
      <div className="absolute w-full bg-primary-gradient px-4 py-[18px] flex items-center left-0 bottom-0 gap-x-2.5">
        <div className="py-0.5 px-2">
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer text-white text-xl"
            onClick={handlePlayPauseClick}
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
          </span>
        </div>
        <div className="px-1 w-11">
          <p className="text-white text-xs leading-4">{timeLabel}</p>
        </div>
        <div className="grow h-1.5 rounded-lg bg-primary-text relative">
          <div
            style={{ width: `${(currentTime / totalLength) * 100}%` }}
            className="h-full absolute left-0 top-0 bg-light-background rounded-lg z-50"
          ></div>
        </div>
        <div className="flex py-0.5 px-2 gap-x-2.5">
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <img src="/icons/video/volumn.svg" alt="Volumn icon" />
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
