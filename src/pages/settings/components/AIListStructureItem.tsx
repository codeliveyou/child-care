import { colors } from "../../../constants/colors";

// Type definition for the props used in AIListStructureItem component
type AIListStructureItem = {
  title: string;      // The title to be displayed in the component
  content: string;    // The content to be displayed in the component
  keywords: string[]; // List of keywords to be displayed as tags
};

// Functional component that renders an item with a title, content, and keywords
const AIListStructureItem = ({
  title,
  content,
  keywords,
}: AIListStructureItem) => {
  return (
    <div className="bg-[#E9E9F3] rounded-lg border border-[#B6C2E1] flex flex-col p-5 gap-5 relative">
      {/* Close button for the item */}
      <button
        className="absolute top-5 right-5 font-bold"
        style={{ color: colors.blue }} // Button color is set from the colors constant
      >
        X
      </button>
      {/* Display title */}
      <div className="font-bold">{title}</div>
      {/* Display content */}
      <div>{content}</div>
      {/* Display section header for keywords */}
      <div className="font-bold">Nyckelord:</div>
      {/* Display each keyword as a tag */}
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => {
          return (
            <div className="bg-white rounded px-2 py-1 text-sm font-medium">
              {keyword}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIListStructureItem;
