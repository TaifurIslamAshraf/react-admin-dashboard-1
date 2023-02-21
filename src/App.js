import { useContext } from "react";
import "./App.css";
import { DarkModeContext } from "./context/darkModeContext";
import Index from "./routers/Index";
import "./styles/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Index />
    </div>
  );
}

export default App;
