import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Controls from "./tabs/controls/controls";
import Settings from "./tabs/settings/Settings";
import "./App.css";


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