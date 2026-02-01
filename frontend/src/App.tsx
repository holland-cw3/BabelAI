import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Controls from "./tabs/controls/controls";
import Settings from "./tabs/settings/Settings";

export default function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Controls />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
    </Router>

  );
}