import './App.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/Announcement";
import API from "./pages/API";
import Assets from "./pages/Assets";
import Earn from "./pages/Earn";
import Trading from "./pages/Trading";
import RiverPool from "./pages/RiverPool";
import Referral from "./pages/Referral";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trading />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/api" element={<API />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/riverpool" element={<RiverPool />} />
        <Route path="/referral" element={<Referral />} />
      </Routes>
    </Router>
  )
}

export default App
