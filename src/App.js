import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/index';
import Members from './pages/members';
import Recruitment from './pages/recruitment';
import WhoWeAre from './pages/whoWeAre';
import WorkWithUs from './pages/workWithUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/whoWeAre" element={<WhoWeAre />} />
        <Route path="/workWithUs" element={<WorkWithUs />} />
      </Routes>
    </Router>
  );
}

export default App;