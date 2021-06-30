import React, { useState } from "react";
import "./styles.css";
import Inputsection from "./components/Inputsection";
import Listsection from "./components/Listsection";

const App = () => {
  const [mainlist, setmainList] = useState([
    "Waking early in the morning",
    "Going to gym"
  ]);
  return (
    <div className="App" style={{ backgroundColor: "" }}>
      <h1>To Do Lists</h1>
      <Inputsection
        data={mainlist}
        dataUpdate={(element) => setmainList([...mainlist, element])}
      />
      <Listsection data={mainlist} />
    </div>
  );
};

export default App;
