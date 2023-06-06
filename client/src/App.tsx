import "./App.css";
import Feed from "./pages/Feed";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oracula from "./pages/Oracula/Oracula";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/oracula" element={<Oracula />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
