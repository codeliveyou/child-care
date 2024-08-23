export type FileFormat = "doc" | "pdf" | "mp4" | "xsl";

export interface IFileTileItem {
  name: string;
  type: FileFormat;
}

interface FileTileItemProps extends IFileTileItem {
  onClick: () => void;
}

const FileTileItem = ({ name, type, onClick }: FileTileItemProps) => {
  return (
    <div
      className="py-4 px-1 max-w-36 w-full h-fit flex flex-col items-center gap-4 hover:bg-light-background transition duration-300 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={`/images/report/${type}.svg`}
        alt="File icon"
        className="w-16"
      />
      <p className="font-semibold leading-5 text-center">{name}</p>
    </div>
  );
};

export default FileTileItem;
