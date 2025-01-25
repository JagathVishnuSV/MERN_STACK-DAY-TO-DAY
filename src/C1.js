import { useState } from "react";
import C2 from "./C2";

export default function C1() {
  const [user] = useState("parent");
  const [childData, setChildData] = useState(""); 

 
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <>
      <h1>This is C1.........</h1>
      <C2 user={user} sendDataToParent={handleChildData} />
      <h1>Data from my child: {childData}</h1>
    </>
  );
}
