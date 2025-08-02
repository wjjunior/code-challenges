import type { FileNode } from "../types/FileNode";
import TreeNode from "./TreeNode";

interface TreeViewProps {
  data: FileNode[];
}

export default function TreeView({ data }: TreeViewProps) {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontSize: "14px",
        lineHeight: "1.4",
        color: "#333",
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "6px",
        padding: "8px 0",
        maxWidth: "400px",
        minWidth: "250px",
      }}
    >
      {(() => {
        const sortedData = [...data].sort((a, b) => {
          // Folders first, then files
          if (a.type === "folder" && b.type === "file") return -1;
          if (a.type === "file" && b.type === "folder") return 1;
          // If both are same type, sort alphabetically
          return a.name.localeCompare(b.name);
        });
        return sortedData.map((node, index) => (
          <TreeNode key={`root-${node.name}-${index}`} node={node} />
        ));
      })()}
    </div>
  );
}
