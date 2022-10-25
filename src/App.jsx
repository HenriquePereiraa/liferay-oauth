import { useState } from "react";

import { Authorize } from "./components/Authorize";
import { Token } from "./components/Token";
import { Users } from "./components/Users";

import "./App.css";

export function App() {
  const [code, setCode] = useState("");
  const [token, setToken] = useState({});

  function handleCodeAuthorization(code) {
    setCode(code);
  }

  function handleToken(token) {
    setToken(token);
  }

  return (
    <div className="App">
      <Authorize handleCode={handleCodeAuthorization} />
      <hr />
      <Token handleToken={handleToken} code={code}/>
      <hr />
      <Users token={token}/>
    </div>
  );
}
