import { useEffect, useState } from "react";

import Dialog from "../common/Dialog";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import TextField from "../common/TextField";
import Button from "../../pages/globalcomponents/Button";

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

function EventDialog({
  open,
  onClose,
  action = Action.Update,
  day,
  time,
  title,
  description,
}: EventDialogProps) {
  const [staging, setStaging] = useState<Staging>(Staging.Confirm);

  useEffect(() => {
    if (action === Action.Create) {
      setStaging(Staging.Editing);
    }
  }, [action]);

  const handleSaveClick = () => {
    if (action === Action.Create) {
      onClose();
    } else {
      if (staging === Staging.Confirm) {
        setStaging(Staging.Editing);
      } else {
        onClose();
      }
    }
  };

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
            <p className="text-xl leading-6 font-bold">{day}</p>
            <p className="text-xs">{time}</p>
            <p className="font-bold leading-5">{title}</p>
            <p className="font-light leading-4 text-sm">{description}</p>
            <div className="self-end">
              <button className="text-[#FF3E4C] py-2 px-4 bg-transparent">
                Ta bort
              </button>
              <button
                className="text-white py-2 px-4 bg-primary-background rounded-lg"
                onClick={() => {
                  setStaging(Staging.Editing);
                }}
              >
                Redigera
              </button>
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
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Patient / Rum namn</p>
              <Input name="room" placeholder="Noah" className="w-full" />
            </div>
            <div className="space-y-1 mb-4">
              <p className="pl-2 text-xs">Tid</p>
              <div className="flex gap-x-1">
                <div className="space-y-1 grow">
                  <Input
                    name="start"
                    placeholder="12/03/2024 11:00"
                    className="text-center w-full"
                  />
                  <p className="pl-2 text-disabled-text text-xs">Start tid</p>
                </div>
                <span className="text-sm leading-4 mt-2">:</span>
                <div className="space-y-1 grow">
                  <Input
                    name="end"
                    placeholder="12/03/2024 13:00"
                    className="text-center w-full"
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
