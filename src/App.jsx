import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Datenschutz from "./components/Datenschutz";
import Impressum from "./components/Impressum";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App;
