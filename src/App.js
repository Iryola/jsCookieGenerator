import React, { useState } from "react";
import Cookie from "js-cookie";

import Login from "./login";

export default function App() {
  const [name, setName] = useState(Cookie.get("jsCookieDemo"));

  const handleSet = () => {
    setName(Cookie.get("jsCookieDemo"));
  };

  const handleDelete = () => {
    Cookie.remove("jsCookieDemo");
    setName(Cookie.get("jsCookieDemo"));
  };

  return (
    <div className="app">
      {Cookie.get("jsCookieDemo") ? (
        <div>
          <p>Welcome, {name}</p>
          <button onClick={handleDelete}>Log Out</button>
        </div>
      ) : (
        <Login handleSet={handleSet} />
      )}
    </div>
  );
}
