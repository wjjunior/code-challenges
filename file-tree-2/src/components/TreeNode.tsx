import { useState } from "react";
import type { FileNode } from "../types/FileNode";

function TreeNode({ node }: { node: FileNode }) {
  const [isOpen, setIsOpen] = useState(false);
  if (node.type === "file") {
    return <div>{node.name}</div>;
  }

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{node.name}</div>
      {isOpen &&
        node.children?.map((node) => <TreeNode key={node.name} node={node} />)}
    </div>
  );
}

export default TreeNode;
