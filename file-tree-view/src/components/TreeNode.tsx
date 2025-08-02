import { useState } from "react";
import type { FileNode } from "../types/FileNode";

interface TreeNodeProps {
  node: FileNode;
}

export default function TreeNode({ node }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasChildren =
    node.type === "folder" && node.children && node.children.length > 0;

  return (
    <div>
      {node.type === "folder" ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }
          }}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Collapse" : "Expand"} folder ${node.name}`}
          style={{
            cursor: "pointer",
            userSelect: "none",
            background: "none",
            border: "none",
            padding: "4px 8px",
            font: "inherit",
            textAlign: "left",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <span style={{ fontSize: "16px" }}>{isOpen ? "📂" : "📁"}</span>
          <span>{node.name}</span>
        </button>
      ) : (
        <div
          role="treeitem"
          tabIndex={0}
          aria-selected="false"
          style={{
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <span style={{ fontSize: "16px" }}>📄</span>
          <span>{node.name}</span>
        </div>
      )}

      {isOpen && hasChildren && (
        <div style={{ paddingLeft: "16px" }}>
          {(() => {
            const sortedChildren = [...node.children!].sort((a, b) => {
              // Folders first, then files
              if (a.type === "folder" && b.type === "file") return -1;
              if (a.type === "file" && b.type === "folder") return 1;
              // If both are same type, sort alphabetically
              return a.name.localeCompare(b.name);
            });
            return sortedChildren.map((child, index) => (
              <TreeNode
                key={`${node.name}-${child.name}-${index}`}
                node={child}
              />
            ));
          })()}
        </div>
      )}
    </div>
  );
}
