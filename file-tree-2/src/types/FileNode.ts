export type FileNode = {
  name: string;
  type: "folder" | "file";
  children?: FileNode[];
};
