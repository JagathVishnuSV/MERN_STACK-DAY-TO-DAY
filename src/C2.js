import { useState } from "react";

export default function C2({ user, sendDataToParent }) {
  const [stu] = useState("I'm your student");
  const sendData = () => {
    sendDataToParent(stu);
  };

  return (
    <>
      <p>This is C2</p>
      <p>
        C2: The data coming from C1 is <b>{user}</b>
      </p>
      <button onClick={sendData}>Send Data to Parent</button>
    </>
  );
}