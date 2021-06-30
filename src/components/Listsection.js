import * as React from "react";
const Listsection = (props) => {
  return (
    <div style={{ backgroundColor: "lightblue", textAlign: "left" }}>
      {props.data && props.data.length > 0 ? (
        props.data.map((ele, index) => {
          return (
            <p>
              {index + 1} : {ele}
            </p>
          );
        })
      ) : (
        <p> no items in the list</p>
      )}
    </div>
  );
};
export default Listsection;
