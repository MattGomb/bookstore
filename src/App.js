import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import Categories from "./pages/Categories";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Books" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
