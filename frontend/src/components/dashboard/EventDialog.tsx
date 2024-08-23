import { useEffect, useState } from "react";

import Dialog from "../common/Dialog";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import TextField from "../common/TextField";
import Button from "../common/Button";

enum Staging {
  Confirm = "confirm",
  Editing = "editing",
}

export enum Action {
  Create = "create",
  Update = "update",
}

interface EventDialogProps {
  open: boolean;
  onClose: () => void;
  action: Action;
  day: string;
  time: string;
  title: string;
  description: string;
}

const getDay = (datetime: string) => {
  const factors = datetime.split(" ");
  const date = factors[0] || "";
  return new Date(date).toLocaleDateString("sv-se", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const getTime = (datetime: string) => {
  const factors = datetime.split(" ");
  return factors[1] || "";
};

function EventDialog({
  open,
  onClose,
  day,
  time,
  title: initialTitle,
  description: initialDesc,
  action: initialAction = Action.Update,
}: EventDialogProps) {
  const [action, setAction] = useState<Action>(initialAction);
  const [staging, setStaging] = useState<Staging>(
    initialAction === Action.Create ? Staging.Editing : Staging.Confirm
  );
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [title, setTitle] = useState<string>(initialTitle);
  const [description, setDescription] = useState<string>(initialDesc);

  const handleSaveClick = () => {
    if (action === Action.Create) {
      setAction(Action.Update);
      setStaging(Staging.Confirm);
    } else {
      setStaging(Staging.Confirm);
    }
  };

  useEffect(() => {
    const times = time.replace(/ /g, "").split("-");
    setStartTime(times.length === 2 ? `${day} ${times[0] || ""}` : "");
    setEndTime(times.length === 2 ? `${day} ${times[1] || ""}` : "");
  }, [day, time]);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDesc);
  }, [initialTitle, initialDesc]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="text-primary-text bg-white rounded-lg p-8"
      maxWidth={staging === Staging.Confirm ? "sm" : "xs"}
    >
      <div className="px-2 flex flex-col gap-y-1 text-primary-text">
        {staging === "confirm" ? (
          <>
            <p className="text-xl leading-6 font-bold">{getDay(startTime)}</p>
            <p className="text-xs">
              {getTime(startTime)} - {getTime(endTime)}
            </p>
            <p className="font-bold leading-5">{title}</p>
            <p className="font-light leading-4 text-sm">{description}</p>
            <div className="flex justify-end">
              <Button size="small" variant="text" className="text-[#FF3E4C]">
                Ta bort
              </Button>
              <Button
                size="small"
                onClick={() => {
                  setStaging(Staging.Editing);
                }}
              >
                Redigera
              </Button>
            </div>
          </>
        ) : (
          <>
            <h1 className="mb-4 font-bold text-xl leading-6">
              {action === Action.Create ? "Skapa" : "Redigera"} händelse
            </h1>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Händelsenamn</p>
              <Input
                name="name"
                placeholder="Noah och Elsa"
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Patient / Rum namn</p>
              <Input
                name="room"
                placeholder="Noah"
                className="w-full"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Tid</p>
              <div className="flex gap-x-1">
                <div className="space-y-1 grow">
                  <Input
                    name="start"
                    placeholder="12/03/2024 11:00"
                    className="text-center w-full"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                  <p className="pl-2 text-disabled-text text-xs">Start tid</p>
                </div>
                <span className="text-sm leading-4 mt-2">:</span>
                <div className="space-y-1 grow">
                  <Input
                    name="end"
                    placeholder="12/03/2024 13:00"
                    className="text-center w-full"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default EventDialog;
