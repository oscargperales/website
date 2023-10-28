import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs'; // Verify the component name and file path
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

if (process.env.REACT_APP_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ScrollToTop />
        <Routes>
  <Route path="/website" element={<Home />} /> {/* Use "/website" for the home page */}
  <Route path="/projects" element={<Projects />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/skills" element={<Skills />} />
</Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
