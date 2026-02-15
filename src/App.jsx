import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <Router>
      <CustomCursor />
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
