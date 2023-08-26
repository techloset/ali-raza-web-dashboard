import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Compaign from "./pages/Compaign";
import Performance from "./pages/Performance";
import Audience from "./pages/Audience";
import Promote from "./pages/Promote";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="overscroll-contain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="compaign" element={<Compaign />} />
            <Route path="audience" element={<Audience />} />
            <Route path="performance" element={<Performance />} />
            <Route path="promote" element={<Promote />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
