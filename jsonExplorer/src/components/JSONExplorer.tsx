import { JSONNode  } from "./JSONNode";

type JSONExplorerProps = {
  data: any;
  path?: string;
  onClick: (path: string) => void;
};

export const JSONExplorer: React.FC<JSONExplorerProps> = ({
  data,
  path = "",
  onClick,
}) => {
  const isArray = Array.isArray(data);

  return (
    <div className="json-container">
      {isArray ? "[" : "{"}
      <div className="json-inner">
        {Object.keys(data).map((key, index) => {
          const newPath = isArray
            ? `${path}.${key}`
            : path
            ? `${path}.${key}`
            : key;
          return !isArray || isNaN(parseInt(key)) ? (
            <JSONNode 
              key={index}
              name={key}
              value={data[key]}
              path={newPath}
              onClick={onClick}
            />
          ) : (
            <JSONExplorer
              key={index}
              data={data[key]}
              path={newPath}
              onClick={onClick}
            />
          );
        })}
      </div>
      {isArray ? "]" : "}"}
    </div>
  );
};
