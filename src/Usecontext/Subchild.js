import React, { useContext } from "react";
import { userContext } from "./Usecontexts";

function Subchild() {
  const data = useContext(userContext);
  console.log(data);
  return (
    <>
      <h1 className="name">Hello</h1>
    </>
  );
}
export default Subchild;
