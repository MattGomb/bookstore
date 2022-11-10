import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
