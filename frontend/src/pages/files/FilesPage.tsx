import React from "react";
import Button from "../globalcomponents/Button"; // Importing the Button component from global components
import FolderSelect from "./components/FolderSelect"; // Importing the FolderSelect component from local components
import FileItem1 from "./components/FileItem1"; // Importing the FileItem1 component from local components
import FileItem2 from "./components/FileItem2"; // Importing the FileItem2 component from local components
import { motion } from "framer-motion"; // Importing motion from framer-motion for animations

const FilesPage = () => {
    return (
        <>
            <motion.div
                className="grid grid-cols-3 gap-4 h-full p-5 pt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left panel with folders */}
                <div className="bg-white rounded-xl p-5 flex flex-col">
                    <div className="text-xl font-semibold pb-5">Mapp</div>
                    <div className="flex-1 flex flex-col">
                        {/* Rendering FolderSelect component with folder names */}
                        <FolderSelect folderNames={["Elsas rapport", "Noah", "Stefan"]} />
                    </div>
                    <div>
                        {/* Button to create a new folder */}
                        <Button className="float-right flex items-center gap-2 py-1">
                            <span className="text-3xl">+</span>Skapa ett mapp
                        </Button>
                    </div>
                </div>

                {/* Right panel with recent files */}
                <div className="bg-white col-span-2 rounded-xl p-5">
                    <div className="text-xl font-semibold pb-5">Senaste filer </div>
                    <div className="flex flex-wrap gap-2">
                        {/* Displaying recent FileItem1 components */}
                        <FileItem1 name="Elsas möte rapport" size="10Mb" type="doc" />
                        <FileItem1 name="Elsas laddad information" size="15.5Mb" type="pdf" />
                        <FileItem1 name="Elsas Statistik" size="123.3MB" type="xsl" />
                    </div>
                    <div className="text-xl font-semibold py-5">Filer</div>
                    <div className="flex flex-wrap gap-4">
                        {/* Displaying FileItem2 components */}
                        <FileItem2 name="Elsas laddad information" type="mp4" />
                        <FileItem2 name="Elsas möte rapport" type="doc" />
                        <FileItem2 name="Elsas laddad information" type="pdf" />
                        <FileItem2 name="Elsas möte rapport" type="doc" />
                        <FileItem2 name="Elsas laddad information" type="pdf" />
                        <FileItem2 name="Elsas Statistik" type="xsl" />
                        <FileItem2 name="Elsas laddad information" type="pdf" />
                        <FileItem2 name="Elsas 2023" type="xsl" />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default FilesPage;