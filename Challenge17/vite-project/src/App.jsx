import React, { useState } from 'react';
import PlaylistPage from './components/PlaylistPage.jsx';
import BrowserPage from './components/BrowserPage.jsx';
import './styles/main.scss';

function App() {
  const [activeTab, setActiveTab] = useState('playlist');

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Challenge 7</h1>
        <p className="header__subtitle">Linked Lists - Music Player & Browser History</p>
      </header>

      <div className="container">
        <nav className="tabs">
          <button
            className={`tabs__tab ${activeTab === 'playlist' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveTab('playlist')}
          >
            🎵 Music Playlist
          </button>
          <button
            className={`tabs__tab ${activeTab === 'browser' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveTab('browser')}
          >
            🌐 Browser History
          </button>
        </nav>

        {activeTab === 'playlist' && <PlaylistPage />}
        {activeTab === 'browser' && <BrowserPage />}
      </div>
    </div>
  );
}

export default App;