import "./App.css";
import Navbar from "./components/Navbar";
import CreateExperiment from "./components/CreateExperiment";
import FormSubmitted from "./components/formSubmitted";
import ShowExperiments from "./components/ShowExperiments";
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <Router>
           <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />}> </Route>
            <Route path="/CreateExperiment" element={<CreateExperiment />}> </Route>
            <Route path="/AttemptExperiment" element={<ShowExperiments />}> </Route>
            <Route path="/FormSubmitted" element={<FormSubmitted />}> </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
