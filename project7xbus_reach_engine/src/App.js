import React from 'react';
import ScrollDropList from './components/ScrollDropList';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Project7xbus Reach Engine</h1>
        <p>High-leverage global reach dashboard and scroll drops feed</p>
      </header>
      <main>
        <Dashboard />
        <ScrollDropList />
      </main>
      <footer>
        <small>© 2025 Project7xbus</small>
      </footer>
    </div>
  );
}

export default App;
