import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl">GitHub User Search</h1>
      </header>
      <main className="p-4">
        <Search />
      </main>
      <footer className="p-4 text-center text-gray-600">
        <p>© 2025 GitHub User Search</p>
      </footer>
    </div>
  );
}

export default App;