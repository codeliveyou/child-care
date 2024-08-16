export type FileFormat = "doc" | "pdf" | "mp4" | "xsl";

export interface IFileListItem {
  name: string;
  type: FileFormat;
  size: string;
}

interface FileListItemProps extends IFileListItem {
  onClick: () => void;
}

const FileListItem = ({ name, size, type, onClick }: FileListItemProps) => {
  return (
    <div
      className="p-4 flex items-center gap-2 rounded-lg border border-light-background cursor-pointer shrink-0"
      onClick={onClick}
    >
      <img
        src={`/images/report/${type}.svg`}
        alt="File icon"
        className="w-10"
      />
      <div className="flex flex-col gap-y-1">
        <div className="font-semibold leading-5">{name}</div>
        <div className="text-sm leading-4">{size}</div>
      </div>
    </div>
  );
};

export default FileListItem;
