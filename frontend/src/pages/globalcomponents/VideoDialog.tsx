import react from "react"

type VideoDialogProps = {
    isOpen: boolean;
    onClose: () => void;
}
const VideoDialog = ({ isOpen, onClose }: VideoDialogProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all " onClick={(ev) => ev.stopPropagation()}>
          <img src="/VideoDialog.png" />
        </div>
      </div>
    );
  };

export default VideoDialog;