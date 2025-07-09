import React, { Children, useEffect, useState } from "react";
import jsonData from "../utils/vsFilesFolderStructure.json";
import { RecursiveFolderFiles } from "./RecursiveFolderFiles";
import { PlusIcon, MinusIcon, FolderIcon } from "@heroicons/react/24/solid";

const FilesFolderStructure = () => {
  const [dataStructure, setDataStructure] = useState(jsonData);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter Name");
    const updateTree = (data) => {
      return data.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };
    setDataStructure((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (data) => {
      return data.filter((node) => node.id !== itemId).map((node => {
        if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
      }))
    };
    setDataStructure((prev) => updateTree(prev));
  };
  return (
    <div className="w-full md:w-3/4 p-4">
      <h1 className="text-xl md:text-3xl font-bold mb-4">
        Vs Code Folder Structure
      </h1>
      <div className="p-4 border rounded shadow bg-white max-w-full overflow-auto">
        <RecursiveFolderFiles
          data={dataStructure}
          addNodeToList={addNodeToList}
          deleteNodeFromList={deleteNodeFromList}
        />
      </div>
    </div>
  );
};

export default FilesFolderStructure;
