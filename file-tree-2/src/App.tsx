import "./App.css";
import TreeView from "./components/TreeView";
import data from "./data/mockData.json";
import type { FileNode } from "./types/FileNode";

function App() {
  return (
    <div>
      <TreeView data={data as FileNode[]} />
    </div>
  );
}

export default App;
