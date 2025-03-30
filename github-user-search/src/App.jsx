import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>My Application</h1>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        
        <footer>
          <p>© 2025 My App</p>
        </footer>
      </div>
    </Router>
  );
}

// Placeholder Home component
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

export default App;