import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oracula from "./pages/OraculaArea/OraculaArea";
import OraculaArea from "./pages/OraculaArea/OraculaArea";
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <Routes>
          <Route path="/" element={<OraculaArea />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
