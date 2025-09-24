import { useState } from 'react'
import PlaylistPage from './Components/PlaylistPage'
import BrowserPage from './Components/BrowserPage'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('playlist')

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Challenge 07 - Linked Lists
      </h1>
      
      <nav style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          onClick={() => setActiveTab('playlist')}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            backgroundColor: activeTab === 'playlist' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'playlist' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Playlist (Linked List)
        </button>
        <button
          onClick={() => setActiveTab('browser')}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            backgroundColor: activeTab === 'browser' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'browser' ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Browser History (Doubly Linked List)
        </button>
      </nav>

      {/* Page Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {activeTab === 'playlist' && <PlaylistPage />}
        {activeTab === 'browser' && <BrowserPage />}
      </div>
    </div>
  );
}

export default App;