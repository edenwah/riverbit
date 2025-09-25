import './App.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/Announcement";
import API from "./pages/API";
import Assets from "./pages/Assets";
import Earn from "./pages/Earn";
import Trading from "./pages/Trading";
import RiverPool from "./pages/RiverPool";
import ReferralFoundationLeader from "./pages/Referral_FoundationLeader";
import ReferralCandidateUser from "./pages/Referral_CandidateUser";

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
        <Route path="/referral/candidate" element={<ReferralCandidateUser />} />
        <Route path="/referral/foundation" element={<ReferralFoundationLeader />} />
      </Routes>
    </Router>
  )
}

export default App
