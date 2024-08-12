import react from "react"

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full" onClick={(ev) => ev.stopPropagation()}>
          <div className="p-8 relative">
            {/* <button onClick={onClose} className="text-gray-700 hover:bg-gray-200 w-5 h-5 absolute top-3 right-3">
              X
            </button> */}
            <div className="mt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Dialog;