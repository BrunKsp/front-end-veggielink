import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routess from "./routes/routes";
import { setToken } from "./services/api";

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <React.StrictMode>
      <Routess />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
