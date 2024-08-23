import Dialog from "../common/Dialog";
import Input from "../common/Input";
import Button from "../common/Button";

type ShareDialogProps = {
  open: boolean;
  onClose: () => void;
};

const ShareDialog = ({ open, onClose }: ShareDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="bg-primary-background rounded-lg !max-w-[525px]"
    >
      <div className="py-6 px-10 w-full h-full flex flex-col gap-y-3">
        <p className="font-extrabold text-[32px] leading-10 text-center text-white">
          Inbjudningskod
        </p>
        <div className="py-2 px-8">
          <p className="text-sm leading-5 text-focused-background text-center">
            Siffrorna nedan hjälper dig att bjuda in en patient eller moderator
            till det här rummet.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2.5 px-12">
          <div className="w-full flex items-center justify-end gap-x-2.5">
            <p className="text-lg leading-6 text-light-background">
              Patient ID:
            </p>
            <div className="relative">
              <Input
                name="patientID"
                placeholder="#123445456546"
                className="border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                <img src="/icons/copy.svg" alt="Copy icon" />
              </span>
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-x-2.5">
            <p className="text-lg leading-6 text-light-background">Gäst ID:</p>
            <div className="relative">
              <Input
                name="patientID"
                placeholder="#234234fdf2345"
                className="border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                <img src="/icons/copy.svg" alt="Copy icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4 flex justify-center">
          <Button
            className="py-2 px-4 text-base leading-5 !bg-light-background !text-primary-background"
            onClick={() => {
              onClose();
            }}
          >
            Klart
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ShareDialog;
