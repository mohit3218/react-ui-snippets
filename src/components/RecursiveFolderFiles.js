import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  DocumentIcon,
  TrashIcon 
} from "@heroicons/react/24/solid";


export const RecursiveFolderFiles = ({ data, addNodeToList, deleteNodeFromList }) => {
  const [isExpand, setIsExpand] = useState({});

  return (
    <div className="pl-2 text-sm whitespace-nowrap">
      {data.map((node) => (
        <div key={node.id} className="my-1">
          <div className="flex items-center cursor-pointer">
            {node?.isFolder && (
              <button
                onClick={() =>
                  setIsExpand((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
                className="flex items-center text-blue-600"
              >
                {isExpand?.[node.name] ? (
                  <ChevronDownIcon className="w-4 h-4 mr-1" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4 mr-1" />
                )}
              </button>
            )}
            <div className="flex space-x-2 items-center w-full">
              {!node?.isFolder && (
                <DocumentIcon className="w-4 h-4 mr-1 text-gray-500" />
              )}
              <span>{node.name}</span>
              {node?.isFolder && (
                <FolderIcon className="w-4 h-4 text-yellow-500" onClick={() => addNodeToList(node.id)} />
                
              )}
              <TrashIcon className="w-4 h-4 text-red-500" onClick={() => deleteNodeFromList(node.id)} />
            </div>
          </div>

          {isExpand?.[node.name] && node?.children && (
            <div className="ml-4 border-l border-gray-300 pl-2">
              <RecursiveFolderFiles data={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
