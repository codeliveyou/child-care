import react from "react"
import LeftSVG from "../../assets/left.svg?react"
import DownloadSVG from "../../assets/download.svg?react"

type DocumentDialogProps = {
    isOpen: boolean;
    onClose: () => void;
}
const DocumentDialog = ({ isOpen, onClose }: DocumentDialogProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-4xl w-full" onClick={(ev) => ev.stopPropagation()}>
          <div className="p-2 relative flex flex-col">
            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <button><LeftSVG /></button>
              </div>
              <div className="flex-1">
                <div className="text-[#211DEF] font-bold text-lg">Sofia Rapport</div>
                <div className="text-[#374151]">2 Mars,  2024 </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[#B6C2E1]">Ladda ner</div>
                <DownloadSVG />
              </div>
              <div className="items-center flex">
                <button className="py-2 px-4 bg-[#211DEF] text-white rounded-lg">Edit</button>
              </div>
            </div>
            <div className="p-10">
              <div className="text-5xl font-bold mb-10">Medicinsk Rapport</div>
              <div>Patientinformation:</div>
              <div>Namn: Sofia Andersson</div>
              <div>Ålder: 42 år</div>
              <div>Kön: Kvinna</div>
              <div>Personnummer: 890512-1234</div>
              <div>Datum för besök: 29 mars 2024</div>
              <div className="text-2xl font-semibold my-5">Besöksorsak: Patienten söker vård för ihållande huvudvärk och yrsel sedan två veckor tillbaka.</div>
              <div className="font-bold">Symptom:</div>
              <div>Huvudvärk: Patienten beskriver huvudvärken som dunkande och lokaliserad till båda tinningarna samt pannan. Smärtan är intensiv och försämrar patientens förmåga att utföra dagliga aktiviteter.</div>
              <div>Yrsel: Patienten upplever episoder av yrsel, särskilt vid snabba huvudrörelser eller vid resning från sittande eller liggande ställning.</div>

              <div className="font-bold mt-5">Tidigare sjukdomshistoria:</div>
              <div>Tidigare diagnoser inkluderar migrän och lindrigt förhöjt blodtryck.</div>
              <div>Inga tidigare operationer eller allvarliga sjukdomar.</div>

              <div className="font-bold mt-5">Nuvarande medicinering:</div>
              <div>Paracetamol vid behov för huvudvärk.</div>
              <div>Amlodipin för blodtryckskontroll.</div>

              <div className="font-bold mt-5">Familjehistoria:</div>
              <div>Modern lider av migrän.</div>
              <div>Inga andra signifikanta sjukdomar i familjen.</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DocumentDialog;