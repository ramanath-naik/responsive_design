import React, { useState } from "react";
import { useCookies } from "react-cookie";

function YourComponent() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Set cookie
  const handleSetCookie = () => {
    setCookie("user", name, { path: "/" });
  };

  // Get cookie
  const handleGetCookie = () => {
    alert(`Stored cookie is: ${cookies.user}`);
  };

  // Remove cookie
  const handleRemoveCookie = () => {
    removeCookie("user", { path: "/" });
  };

  return (
    <div>
      <div>
        <label>
          Enter a name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "start", paddingTop:"20px" }}>
        <button onClick={handleSetCookie}>Set as Cookie</button>
        <button onClick={handleGetCookie}>Get Cookie</button>
        <button onClick={handleRemoveCookie}>Remove Cookie</button>
      </div>
    </div>
  );
}

export default YourComponent;
