import { useEffect, useState } from "react";

const LoginBtn = () => {
 
  const [logBtn, setLogBtn] = useState("Login");
  const [test, setTest] = useState("");

  return (
    <button
      className="button-87"
      onClick={() => {
        logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
      }}
      role="button"
    >
      {" "}
      {logBtn}
    </button>
  );
};

export default LoginBtn;
