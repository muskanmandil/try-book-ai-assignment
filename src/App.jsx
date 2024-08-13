import React from "react";
import "./App.css";
import ApiPage from "./pages/apiPage";
import ThemeToggleBtn from "./components/themeToggleBtn/ThemeToggleBtn";

const App = () => {
  return (
    <div className="app">
      <ApiPage />
      <ThemeToggleBtn />
    </div>
  );
};

export default App;
