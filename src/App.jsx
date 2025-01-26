import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { CustomMouse } from "./components/customMouse/CustomMouse";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <CustomMouse />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
