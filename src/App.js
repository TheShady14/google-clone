import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CustomizeChrome from "./components/CustomiseChrome";

function App() {
  const buttons = {
    search: "Google Search",
    lucky: "I'm Feeling Lucky",
  };

  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = isDarkMode ? "#fff" : "#333"; // background colours
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent buttons={buttons} isDarkMode={isDarkMode} />
      {/* Pass toggleDarkMode to CustomiseChrome */}
      <CustomizeChrome toggleDarkMode={toggleDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
