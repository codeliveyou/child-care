import Button from "../globalcomponents/Button";
import Table from "../../components/common/Table";

function Dashboard() {
  return (
    <div className="grow flex flex-col gap-y-4 overflow-y-auto">
      <div className="w-full grid grid-cols-4 gap-4">
        <div className="py-8 flex flex-col items-center justify-between bg-primary-background rounded-lg">
          <p className="text-center text-white text-xl leading-6">
            Nya företag ?
          </p>
          <Button className="py-2.5 max-w-[250px] text-base leading-5 !text-primary-text !bg-white">
            Skapa ett företag
          </Button>
        </div>
        <div className="col-span-3 py-2 px-4 pb-[26px] flex flex-col gap-y-6 bg-white rounded-lg">
          <p className="font-semibold text-xl leading-6">App statistik</p>
          <div className="w-full grid grid-cols-4 gap-x-6">
            <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-primary-background rounded-lg">
              <p className="text-base leading-5">Företag</p>
              <p className="font-bold text-3xl leading-9">100</p>
            </div>
            <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-danger-background rounded-lg">
              <p className="text-base leading-5">Användare</p>
              <p className="font-bold text-3xl leading-9">345</p>
            </div>
            <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-focused-background rounded-lg">
              <p className="text-base leading-5">Patient</p>
              <p className="font-bold text-3xl leading-9">1200</p>
            </div>
            <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-primary-text rounded-lg">
              <p className="text-base leading-5">Utrymme</p>
              <p className="font-bold text-3xl leading-9">12Gb / 120Gb</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grow py-4 px-7 flex flex-col gap-y-2.5 bg-white rounded-lg overflow-y-auto">
        <p className="font-semibold text-xl leading-6">Användning rapport</p>
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
