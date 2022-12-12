import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="/gyancodes.svg" alt="logo" className="logo" />
      <h1>Thanks for Visiting 😊</h1>
      <h3>Website is under maintenance 🚧</h3>
    </>
  );
}

export default App;
