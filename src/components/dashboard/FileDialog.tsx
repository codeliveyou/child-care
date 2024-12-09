import Dialog from "../common/Dialog";
import Button from "../common/Button";
import Input from "../common/Input";
import { ChangeEvent, useState } from "react";

// Props for the EventDialog component
interface FileDialogProps {
  open: boolean; // Flag to control the dialog visibility
  onClose: () => void; // Callback to close the dialog
  onSubmit: (name: string) => void;
}

// EventDialog component for displaying and editing event details
function FileDialog({
  open,
  onClose,
  onSubmit
}: FileDialogProps) {
  const [folderName, setFolderName] = useState<string>('')

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value)
  }

  return (
    <Dialog
      open={open} // Dialog visibility controlled by open prop
      onClose={onClose} // Close dialog callback
      className="text-primary-text bg-white rounded-lg p-8"
      maxWidth='sm' // Adjust dialog width based on staging
    >
      <div className="px-2 flex flex-col gap-y-2.5 text-primary-text">

        {/* Display event details in confirm stage */}
        Skapa ett mapp
        <Input name="name" value={folderName} onChange={handleNameChange} />
        <div className="flex justify-end">
          <Button size="small" variant="text" className="text-[#FF3E4C]" onClick={onClose}>
            Ta bort
          </Button>
          <Button
            size="small"
            onClick={() => {
              onSubmit(folderName);
              onClose();
              setFolderName('');
            }}
          >
            Skapa
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

export default FileDialog; // Export the EventDialog component for use in other parts of the application
