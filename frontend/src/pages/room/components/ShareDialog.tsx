import react from "react"

type ShareDialogProps = {
    isOpen: boolean;
    onClose: () => void;
}
const ShareDialog = ({ isOpen, onClose }: ShareDialogProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full" onClick={(ev) => ev.stopPropagation()}>
          <div className="p-8 relative">
            <div className="mt-4 bg-blue-600">
              Hi, htere
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ShareDialog;