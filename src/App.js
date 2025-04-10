import './App.css';
import CardContent from './CardContent/CardContent';
import LandingPage from './LandingPage/LandingPage';
import ImmigrationProcess from './trial/trial';
import StartBusiness from './StartBusiness/StartBusiness';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <ImmigrationProcess />
              <CardContent />
            </>
          }
        />
        <Route path="/start-business" element={<StartBusiness />} />
      </Routes>
    </Router>
  );
}

export default App;
