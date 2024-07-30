import react from "react"
import Button from "../globalcomponents/Button";
import FolderSelect from "./components/FolderSelect";
import FileItem1 from "./components/FileItem1";
import FileItem2 from "./components/FileItem2";

const FilesPage = () => {
    return <>
        <div className="grid grid-cols-3 gap-4 h-full p-5 pt-0">
            <div className="bg-white rounded-xl p-5 flex flex-col">
                <div className="text-xl font-semibold pb-5">Mapp</div>
                <div className="flex-1 flex flex-col">
                    <FolderSelect folderNames={["Elsas rapport", "Noah", "Stefan"]} />
                </div>
                <div><Button className="float-right flex items-center gap-2 py-1"><span className="text-3xl">+</span>Skapa ett mapp</Button></div>
            </div>
            <div className="bg-white col-span-2 rounded-xl p-5">
                <div className="text-xl font-semibold pb-5">Senaste filer </div>
                <div className="flex flex-wrap gap-2">
                    <FileItem1 name="Elsas  möte rapport" size="10Mb" type="doc" />
                    <FileItem1 name="Elsas laddad information" size="15.5Mb" type="pdf" />
                    <FileItem1 name="Elsas  Statistik" size="123.3MB" type="xsl" />
                </div>
                <div className="text-xl font-semibold py-5">FIler</div>
                <div className="flex flex-wrap gap-4">
                    <FileItem2 name="Elsas  laddad information" type="mp4" />
                    <FileItem2 name="Elsas  möte rapport" type="doc" />
                    <FileItem2 name="Elsas  laddad information" type="pdf" />
                    <FileItem2 name="Elsas  möte rapport" type="doc" />
                    <FileItem2 name="Elsas  laddad information" type="pdf" />
                    <FileItem2 name="Elsas Statistik" type="xsl" />
                    <FileItem2 name="Elsas  laddad information" type="pdf" />
                    <FileItem2 name="Elsas 2023" type="xsl" />
                </div>
            </div>
        </div>
    </>
};

export default FilesPage;