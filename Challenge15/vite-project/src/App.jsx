import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { createMenuTree } from './data/menuData';

function App() {
  const [menuTree] = useState(() => createMenuTree());
  const [currentPath, setCurrentPath] = useState('/profile');

  const handleNavigate = (path) => {
    setCurrentPath(path);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Sidebar 
        menuTree={menuTree}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />
      <MainContent 
        currentPage={currentPath}
        menuTree={menuTree}
      />
    </div>
  );
}

export default App;