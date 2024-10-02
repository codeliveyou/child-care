import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

import Dialog from "../common/Dialog";

// Props for the ReportDialog component
interface ReportDialogProps {
  open: boolean; // Flag to control dialog visibility
  onClose: () => void; // Callback to close the dialog
  title: string; // Title of the report
  lastDate: string; // Date of the last report update
}

// Props for the ToolbarIcon component
interface IToolbarIcon {
  name: string; // Name of the icon to be displayed
}

// Array of font sizes for the toolbar
const fontSizes = [8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 72, 80, 96];

// Component to render toolbar icons
const ToolbarIcon = ({ name }: IToolbarIcon) => {
  return (
    <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
      <img src={`/icons/toolbar/${name}.svg`} className="w-[18px] h-[18px]" />
    </span>
  );
};

// Main ReportDialog component
function ReportDialog({ open, onClose, title, lastDate }: ReportDialogProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle between edit and view mode

  return (
    <Dialog
      open={open} // Control dialog visibility
      onClose={onClose} // Callback to close the dialog
      maxWidth="md" // Maximum width of the dialog
      className="max-h-[80%] bg-white flex flex-col"
    >
      <div className="grow pb-8 flex flex-col gap-y-2.5 w-full overflow-y-auto">
        <div className="py-2 px-4 flex items-center gap-x-6">
          {/* Back button or close button depending on editing mode */}
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (isEditing) setIsEditing(false); // Exit edit mode
              else onClose(); // Close the dialog
            }}
          >
            {isEditing ? <MdClose size={20} /> : <FaChevronLeft />}
          </span>
          <div className="space-y-1">
            <p className="font-semibold text-lg leading-5 text-primary-background">
              {title} {/* Display report title */}
            </p>
            <p className="text-sm leading-4 text-primary-text">{lastDate}</p> {/* Display last updated date */}
          </div>
          <div className="grow flex justify-end">
            {/* Download button, only visible when not in editing mode */}
            {!isEditing && (
              <div className="flex items-center gap-x-1 text-disabled-text">
                <p className="text-sm leading-4">Ladda ner</p>
                <span className="w-6 h-6 flex items-center justify-center">
                  <HiOutlineArrowDownTray size={20} />
                </span>
              </div>
            )}
          </div>

          {/* Button to toggle between editing and view mode */}
          <button
            className="py-2 px-4 rounded-lg text-white text-sm leading-4 bg-primary-background outline-none"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Spara" : "Edit"}
          </button>
        </div>
        {/* Toolbar visible only in editing mode */}
        {isEditing && (
          <div className="bg-light-background py-3 px-8 flex gap-x-4 items-center">
            <select className="outline-none bg-light-background">
              {fontSizes.map((fontSize, index) => (
                <option key={index} value={fontSize}>
                  {fontSize}
                </option>
              ))}
            </select>
            <div className="flex gap-x-2">
              <ToolbarIcon name="text" />
              <ToolbarIcon name="color" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="bold" />
              <ToolbarIcon name="italic" />
              <ToolbarIcon name="underline" />
              <ToolbarIcon name="strikethrough" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="text-align-left" />
              <ToolbarIcon name="text-align-center" />
              <ToolbarIcon name="text-align-right" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="ordered-list" />
              <ToolbarIcon name="unordered-list" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="photo" />
              <ToolbarIcon name="link" />
            </div>
          </div>
        )}
        {/* Content area with editable text when in editing mode */}
        <div className="grow pt-2 px-8 pr-1 flex flex-col overflow-y-auto">
          <div
            contentEditable={isEditing} // Content becomes editable when in editing mode
            className="pr-6 flex flex-col gap-y-8 outline-none overflow-y-auto scrollbar"
          >
            <h1 className="text-5xl font-semibold">Medicinsk Rapport</h1>
            <div className="leading-5 font-semibold">
              <p>Patientinformation:</p>
              <p>Namn: Sofia Andersson</p>
              <p>Ålder: 42 år</p>
              <p>Kön: Kvinna</p>
              <p>Personnummer: 890512-1234</p>
              <p>Datum för besök: 29 mars 2024</p>
            </div>
            <h2 className="text-2xl leading-8 font-semibold">
              Besöksorsak: Patienten söker vård för ihållande huvudvärk och
              yrsel sedan två veckor tillbaka.
            </h2>
            <div className="leading-5">
              <p className="font-bold">Symtom:</p>
              <p>
                Huvudvärk: Patienten beskriver huvudvärken som dunkande och
                lokaliserad till båda tinningarna samt pannan. Smärtan är
                intensiv och försämrar patientens förmåga att utföra dagliga
                aktiviteter.
              </p>
              <p>
                Yrsel: Patienten upplever episoder av yrsel, särskilt vid snabba
                huvudrörelser eller vid resning från sittande eller liggande
                ställning.
              </p>
            </div>
            <div className="leading-5">
              <p className="font-bold">Tidigare sjukdomshistoria:</p>
              <p>
                Tidigare diagnoser inkluderar migrän och lindrigt förhöjt
                blodtryck.
              </p>
              <p>Inga tidigare operationer eller allvarliga sjukdomar.</p>
            </div>
            <div className="leading-5">
              <p className="font-bold">Nuvarande medicinering:</p>
              <p>Paracetamol vid behov för huvudvärk.</p>
              <p>Amlodipin för blodtryckskontroll.</p>
            </div>
            <div className="leading-5">
              <p className="font-bold">Familjehistoria:</p>
              <p>Modern lider av migrän.</p>
              <p>Inga andra signifikanta sjukdomar i familjen.</p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ReportDialog; // Export the ReportDialog component for use in other parts of the application
