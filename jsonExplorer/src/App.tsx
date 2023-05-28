import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { sampleData } from "./sampleData";
import { JSONExplorer } from "./components/JSONExplorer";
import getPropertyByPath from "./helpers/getPropertyByPath";

function App() {
  const [propertyPath, setPropertyPath] = useState<string>("");
  const [propertyValue, setPropertyValue] = useState<string>("");

  useEffect(() => {
    setPropertyValue(getPropertyByPath(sampleData, propertyPath));
  }, [propertyPath]);

  return (
    <>
      <div className="input-block">
        <input
          type="text"
          placeholder="Property"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPropertyPath(event.target.value);
          }}
          value={propertyPath}
        ></input>
        <div>{"->"}</div>
        <input
          type="text"
          placeholder="Value"
          readOnly
          value={propertyValue}
        ></input>
      </div>
      <div className="explorer-container">
        <JSONExplorer data={sampleData} path="" onClick={setPropertyPath} />
      </div>
    </>
  );
}

export default App;
