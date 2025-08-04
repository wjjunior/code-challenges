import type { FileNode } from "../types/FileNode";
import TreeNode from "./TreeNode";

function TreeView({ data }: { data: FileNode[] }) {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}

export default TreeView;
