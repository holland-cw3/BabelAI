import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./tabs/Home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Calendar from "./tabs/Calendar/Calendar";
import VoiceControl from "./components/voice_control/voice_control";

function App() {

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/calendar' element={<Calendar />}></Route>
          </Routes>
        </div>
        <VoiceControl/>
      </div>

    </Router>
  );
}

export default App;
