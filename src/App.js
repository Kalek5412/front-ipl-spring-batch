import "./App.css";
//import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { TeamPage } from "../src/pages/TeamPage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
//import { MatchPage } from './pages/MatchPage';
//import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
        </Routes>     
     
      </Router>
    </div>
  );
}

export default App;
