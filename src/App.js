

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
