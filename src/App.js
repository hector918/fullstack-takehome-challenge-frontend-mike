import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage';
import RaffleDetailPage from "./pages/raffleDetailPage";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/raffles/:id" element={<RaffleDetailPage />} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
