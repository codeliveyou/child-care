import { ChangeEvent, useEffect, useState } from "react";

import Dialog from "../common/Dialog";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { getLocalDate } from "../../libs/date";

// Enum to manage the dialog's staging (confirm or editing)
enum Staging {
  Confirm = "confirm",
  Editing = "editing",
}

// Enum to define the action type (create or update)
export enum Action {
  Create = "create",
  Update = "update",
}

export interface IEvent {
  id?: string;
  startTime: string;
  endTime: string;
  eventName: string;
  patientName: string;
  description: string;
  createdAt: string;
}

// Props for the EventDialog component
interface EventDialogProps {
  currentDay?: Date;
  open: boolean; // Flag to control the dialog visibility
  action: Action; // Action type (create or update)
  event: IEvent | null;
  onClose: () => void; // Callback to close the dialog
  onSubmit: (event: IEvent, action: 'create' | 'update' | 'delete') => void;
}

const initialEvent: IEvent = {
  startTime: '',
  endTime: '',
  eventName: '',
  patientName: '',
  description: '',
  createdAt: ''
}

// EventDialog component for displaying and editing event details
function EventDialog({
  open,
  onClose,
  event: activeEvent,
  action,
  onSubmit,
  currentDay,
}: EventDialogProps) {
  const [staging, setStaging] = useState<Staging>(
    action === Action.Create ? Staging.Editing : Staging.Confirm
  ); // State to manage the dialog's staging (confirm or editing)
  const [event, setEvent] = useState<IEvent>(activeEvent || initialEvent);
  const [error, setError] = useState<string | null>(null); // State for error messages

  // Function to handle the save button click
  const handleSaveClick = () => {
    // Validate that start time is not later than end time
    const startTime = new Date(event.startTime);
    const endTime = new Date(event.endTime);

    if (startTime > endTime) {
      setError("Start time cannot be later than end time.");
      return;
    }

    setError(null); // Clear error if validation passes
    onSubmit(event, action === Action.Create ? 'create' : 'update');
    onClose();
  };

  const handleEventChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (action === Action.Update) {
      setStaging(Staging.Confirm);
    } else {
      setStaging(Staging.Editing);
    }
  }, [action, open]);

  useEffect(() => {
    if (action === Action.Create) {
      setEvent(initialEvent);
    } else {
      setEvent(activeEvent || initialEvent);
    }
  }, [action, activeEvent]);

  useEffect(() => {
    if (currentDay) {
      setEvent(event => ({
        ...event, startTime: getLocalDate(currentDay),
        endTime: getLocalDate(currentDay),
      }));
    }
  }, [currentDay?.toString()]);

  return (
    <Dialog
      open={open} // Dialog visibility controlled by open prop
      onClose={onClose} // Close dialog callback
      className="text-primary-text bg-white rounded-lg p-8"
      maxWidth={staging === Staging.Confirm ? "sm" : "xs"} // Adjust dialog width based on staging
    >
      <div className="px-2 flex flex-col gap-y-1 text-primary-text">
        {staging === "confirm" ? (
          <>
            {/* Display event details in confirm stage */}
            <p className="text-xl leading-6 font-bold"></p>
            <p className="text-xs">
              { }
            </p>
            <p className="font-bold leading-5">{event.eventName}</p>
            <p className="font-light leading-4 text-sm">{event.description}</p>
            <div className="flex justify-end">
              <Button size="small" variant="text" className="text-[#FF3E4C]" onClick={() => {
                onSubmit(event, 'delete');
                onClose();
              }}>
                Ta bort
              </Button>
              <Button
                size="small"
                onClick={() => {
                  setStaging(Staging.Editing); // Switch to editing stage
                }}
              >
                Redigera
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Display form for creating or editing an event */}
            <h1 className="mb-4 font-bold text-xl leading-6">
              {action === Action.Create ? "Skapa" : "Redigera"} händelse
            </h1>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>} {/* Display error message */}
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Händelsenamn</p>
              <Input
                name="eventName"
                placeholder="Noah och Elsa"
                className="w-full"
                value={event.eventName}
                onChange={handleEventChange}
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Patient / Rum namn</p>
              <Input
                name="patientName"
                placeholder="Noah"
                className="w-full"
                value={event.patientName}
                onChange={handleEventChange}
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Tid</p>
              <div className="flex gap-x-1">
                <div className="space-y-1 grow">
                  <Input
                    name="startTime"
                    placeholder="12/03/2024 11:00"
                    className="text-center w-full"
                    value={event.startTime}
                    onChange={handleEventChange}
                  />
                  <p className="pl-2 text-disabled-text text-xs">Start tid</p>
                </div>
                <span className="text-sm leading-4 mt-2">:</span>
                <div className="space-y-1 grow">
                  <Input
                    name="endTime"
                    placeholder="12/03/2024 13:00"
                    className="text-center w-full"
                    value={event.endTime}
                    onChange={handleEventChange}
                  />
                  <p className="pl-2 text-disabled-text text-xs">Slut tid</p>
                </div>
              </div>
              <Checkbox
                label="Ange bara start tid"
                className="text-xs leading-4 text-disabled-text"
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Beskrivning</p>
              <TextField
                name="description"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                className="w-full leading-5"
                value={event.description}
                onChange={handleEventChange}
              />
            </div>
            <div className="self-end">
              <Button onClick={handleSaveClick}>
                {action === Action.Create ? "Skapa" : "Spara"}
              </Button>
            </div>
          </>
        )}
      </div>
    </Dialog>
  );
}

export default EventDialog; // Export the EventDialog component for use in other parts of the application
