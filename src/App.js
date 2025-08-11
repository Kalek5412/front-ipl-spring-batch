import "./App.scss";
import { TeamPage } from "../src/pages/TeamPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MatchPage } from "./pages/MatchPage";
//import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/team/:teamName" element={<TeamPage />} />
        </Routes>
        <Routes>
          <Route
            path="/team/:teamName/matches/:year"
            element={<MatchPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
