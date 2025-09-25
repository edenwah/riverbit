import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/Announcement";
import API from "./pages/API";
import Assets from "./pages/Assets";
import Earn from "./pages/Earn";
import Trading from "./pages/Trading";
import RiverPool from "./pages/RiverPool";
import ReferralFoundationLeader from "./pages/Referral_FoundationLeader";
import ReferralCandidateUser from "./pages/Referral_CandidateUser";
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Trading, {}) }), _jsx(Route, { path: "/announcement", element: _jsx(Announcement, {}) }), _jsx(Route, { path: "/api", element: _jsx(API, {}) }), _jsx(Route, { path: "/assets", element: _jsx(Assets, {}) }), _jsx(Route, { path: "/earn", element: _jsx(Earn, {}) }), _jsx(Route, { path: "/trading", element: _jsx(Trading, {}) }), _jsx(Route, { path: "/riverpool", element: _jsx(RiverPool, {}) }), _jsx(Route, { path: "/referral/candidate", element: _jsx(ReferralCandidateUser, {}) }), _jsx(Route, { path: "/referral/foundation", element: _jsx(ReferralFoundationLeader, {}) })] }) }));
}
export default App;
