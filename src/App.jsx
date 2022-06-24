/** @format */

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
