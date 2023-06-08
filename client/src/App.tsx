import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oracula from "./pages/OraculaArea/OraculaArea";
import OraculaArea from "./pages/OraculaArea/OraculaArea";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OraculaArea />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
