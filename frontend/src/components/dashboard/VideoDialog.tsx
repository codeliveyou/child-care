import { FaTimes } from "react-icons/fa";

import Dialog from "../common/Dialog";

type VideoDialogProps = {
  open: boolean;
  onClose: () => void;
};
const VideoDialog = ({ open, onClose }: VideoDialogProps) => {
  if (!open) return;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      className="relative rounded-lg overflow-hidden"
    >
      <div className="w-full h-fit">
        <img src="/images/video/popup.png" className="w-full" />
      </div>
      <div className="absolute top-0 py-2 px-4 flex justify-between items-center w-full">
        <p className="text-xl leading-6 text-white">Noah möte</p>
        <div className="flex gap-x-3 items-center">
          <p className="text-sm leading-4 text-white">Igår 11:25</p>
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
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <img src="/icons/video/play.svg" alt="Play icon" />
          </span>
        </div>
        <div className="px-1">
          <p className="text-white text-xs leading-4">08:55</p>
        </div>
        <div className="grow h-1.5 rounded-lg bg-primary-text relative">
          <div className="w-1/3 h-full absolute left-0 top-0 bg-light-background rounded-lg"></div>
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
