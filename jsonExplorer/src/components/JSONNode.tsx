import React from "react";
import { JSONExplorer } from "./JSONExplorer";

type JSONNodeProps = {
  name: string;
  value: any;
  path: string;
  onClick: (path: string) => void;
};

export const JSONNode : React.FC<JSONNodeProps> = ({
  name,
  value,
  path,
  onClick,
}) => {
  return (
    <div className="json-key">
      <span className="json-key-name" onClick={() => onClick(path)}>
        {name}
      </span>
      :
      {typeof value === "object" && value !== null ? (
        <JSONExplorer data={value} path={path} onClick={onClick} />
      ) : (
        <span>{JSON.stringify(value)}</span>
      )}
    </div>
  );
};
