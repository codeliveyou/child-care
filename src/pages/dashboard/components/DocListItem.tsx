type DocListItemProps = {
  title: string;
  createdAt: string;
  filetype: "doc" | "pdf";
};

const DocListItem = ({ title, createdAt, filetype }: DocListItemProps) => {
  return (
    <div className="flex gap-2 px-3">
      {/* Render different icon based on filetype */}
      <div className="rounded-xl overflow-hidden">
        {/* Display the appropriate icon for the file type */}
        <img
          src={filetype === "doc" ? "/fileicon/doc.svg" : "/fileicon/pdf.svg"}
          width={50}
          alt={filetype === "doc" ? "Document Icon" : "PDF Icon"} // Provide alt text for accessibility
        />
      </div>

      <div className="flex flex-col py-2 flex-1">
        {/* Display the document title */}
        <div className="text-xl font-bold">{title}</div>
        <div className="flex-1"></div>
        {/* Display creation date */}
        <div className="text-[#B6C2E1] text-sm">
          Skapades rapport {createdAt}{" "}
        </div>
      </div>
    </div>
  );
};

export default DocListItem;
