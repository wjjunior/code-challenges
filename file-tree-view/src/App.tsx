import { useEffect, useState } from "react";
import "./App.css";
import TreeView from "./components/TreeView";
import type { FileNode } from "./types/FileNode";
import mockData from "./data/mockData.json";

function App() {
  const [data, setData] = useState<FileNode[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData as FileNode[]);
    }, 500);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>File Tree Viewer</h1>
      {data.length > 0 ? <TreeView data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
