import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import Input from "../../components/common/Input";
import TextField from "../../components/common/TextField";

import { ICompany } from "./Dashboard";

type PayOption = "short-pay" | "invoice-pay";

interface CompanyCreateDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (company: ICompany) => void;
}

function CompanyCreateDialog({
  open,
  onCreate,
  onClose,
}: CompanyCreateDialogProps) {
  const [payOption, setPayOption] = useState<PayOption>("short-pay");
  const [company, setCompany] = useState<ICompany>({
    name: "",
    email: "",
    phone: "",
    description: "",
    use_time: "40h",
    status: "Active",
    date: "23-12-2024",
  });

  const handleCompanyChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleCreateClick = () => {
    onCreate({ ...company, children: [] });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="!max-w-[950px] h-[650px]">
      <div className="p-8 grid grid-cols-2 gap-x-4 bg-white rounded-lg">
        <div className="px-2 flex flex-col gap-y-1">
          <p className="pb-4 font-bold text-xl leading-6">Skapa ett företag</p>
          <div className="grow flex flex-col justify-between">
            <div className="flex flex-col gap-y-1">
              <div className="space-y-1 mb-4">
                <p className="pl-2 text-xs">Företag namn</p>
                <Input
                  name="name"
                  size="small"
                  placeholder="Karlstad sjukhuset"
                  className="w-full"
                  value={company.name}
                  onChange={handleCompanyChange}
                />
              </div>
              <div className="space-y-1 mb-4">
                <p className="pl-2 text-xs">Företag e-post</p>
                <Input
                  name="email"
                  size="small"
                  placeholder="info@karlstadsjukhuset.se"
                  className="w-full"
                  value={company.email}
                  onChange={handleCompanyChange}
                />
              </div>
              <div className="space-y-1 mb-4">
                <p className="pl-2 text-xs">Telefon</p>
                <Input
                  name="phone"
                  size="small"
                  placeholder="07 323-234-40"
                  className="w-full"
                  value={company.phone}
                  onChange={handleCompanyChange}
                />
              </div>
              <div className="space-y-1 mb-4">
                <p className="pl-2 text-xs">Beskrivning</p>
                <TextField
                  name="description"
                  placeholder="Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter."
                  className="w-full h-[150px] text-xs"
                  value={company.description}
                  onChange={handleCompanyChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button size="compress" onClick={handleCreateClick}>
                Skapa
              </Button>
            </div>
          </div>
        </div>
        <div className="px-8 flex flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <p className="pb-2.5 font-semibold text-base leading-5 text-primary-text border-b border-light-background">
              Betalningsmetod
            </p>
            <div className="flex flex-col gap-y-1">
              <p className="text-sm leading-4 text-disabled-text">
                Personnummer
              </p>
              <Input
                name="ssn"
                placeholder="853423-5432"
                className="!bg-white/30 border border-primary-border/25 !rounded-none"
              />
              <Button className="!bg-dark-background !text-light-background !rounded-none">
                Koppla konto
              </Button>
              <div className="p-5 text-primary-placeholder text-base leading-5">
                <p>Johan Anderson</p>
                <p>Ringgatan 40,</p>
                <p>653 49 Karlstad</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-2 flex items-center justify-between border-t border-t-white/30">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setPayOption("short-pay");
                }}
              >
                <span
                  className={twMerge(
                    "w-5 h-5 rounded-full flex items-center justify-center border border-disabled-text",
                    payOption === "short-pay"
                      ? "!border-[7px] !border-black"
                      : ""
                  )}
                />
                <p className="text-sm leading-4 text-primary-placeholder">
                  Kort betalning
                </p>
              </div>
              <img src="/images/auth/klarna.png" alt="Pay icon" />
            </div>
            <div className="py-3 px-5 border border-light-border rounded-[4px]">
              <p className="text-xs leading-4">
                <span className="font-bold">Kort </span>
                VISA - - - - 8324
              </p>
            </div>
            <div className="py-3 px-5 border border-disabled-text rounded-[4px]">
              <p className="text-xs leading-4">
                <span className="font-bold">Använda bank konto </span>- - - -
                123922
              </p>
            </div>
            <div className="pt-2">
              <ul
                style={{
                  listStyle: "square",
                }}
                className="pl-10 py-4 px-5 flex flex-col font-semibold text-xs leading-6 bg-light-background"
              >
                <li>Pengar tas ut cirka två bankdagar</li>
                <li>Autogirodebitering</li>
                <li>Klarna betalnings säkerhet</li>
              </ul>
            </div>
            <div className="pt-2 pb-4">
              <span className="underline text-primary-background text-xs leading-4">
                Läs mer
              </span>
            </div>
            <div className="p-2 flex items-center justify-between border-t border-t-light-background/30">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setPayOption("invoice-pay");
                }}
              >
                <span
                  className={twMerge(
                    "w-5 h-5 rounded-full flex items-center justify-center border border-disabled-text",
                    payOption === "invoice-pay"
                      ? "!border-[7px] !border-black"
                      : ""
                  )}
                />
                <p className="text-sm leading-4 text-primary-placeholder">
                  Faktura betalning
                </p>
              </div>
              <img src="/images/auth/klarna.png" alt="Pay icon" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default CompanyCreateDialog;
