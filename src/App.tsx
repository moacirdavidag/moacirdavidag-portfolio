import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "animate.css";
import About from "./pages/About";
import { useTheme } from "./hooks/theme";

function App() {
  const { theme } = useTheme();

  return (
    <div className="container-app" style={{background: theme.colors.background, color: theme.colors.textPrimary}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
