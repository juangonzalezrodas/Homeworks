import React, { useState } from 'react';
import { SongPlaylist } from '../data-structures/LinkedList';
import { mockSongs } from '../data/mockSongs';

function PlaylistPage() {
  const [playlist] = useState(() => {
    const pl = new SongPlaylist();
    mockSongs.forEach(song => pl.add(song));
    return pl;
  });

  const [currentSong, setCurrentSong] = useState(playlist.getCurrentSong());
  const [isPlaying, setIsPlaying] = useState(false);

  const playNext = () => {
    const next = playlist.next();
    if (next) setCurrentSong(next);
  };

  const playPrevious = () => {
    const prev = playlist.previous();
    if (prev) setCurrentSong(prev);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="grid grid--two-cols">
      <div className="card card--glass">
        <div className="card__header">
          <h3 className="card__title">Now Playing</h3>
          <span className="card__badge">🎵 {isPlaying ? 'Playing' : 'Paused'}</span>
        </div>
        
        {currentSong ? (
          <div className="card__content">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#667eea' }}>
              {currentSong.title}
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>
              <strong>Artist:</strong> {currentSong.artist}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
              <strong>Duration:</strong> {currentSong.duration}
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              marginTop: '1.5rem'
            }}>
              <button className="btn btn--outline btn--small" onClick={playPrevious}>
                ⏮ Previous
              </button>
              <button 
                className={`btn ${isPlaying ? 'btn--danger' : 'btn--success'}`}
                onClick={togglePlay}
              >
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
              <button className="btn btn--outline btn--small" onClick={playNext}>
                Next ⏭️
              </button>
            </div>
          </div>
        ) : (
          <p>No hay cancion seleccionada</p>
        )}
      </div>

      <div className="card">
        <div className="card__header">
          <h3 className="card__title">Playlist</h3>
          <span className="card__badge">{playlist.toArray().length} songs</span>
        </div>
        
        <div className="card__content">
          {playlist.toArray().map((song, index) => (
            <div
              key={song.id}
              className={`list__item ${
                currentSong && currentSong.id === song.id ? 'list__item--active' : ''
              }`}
            >
              <div className="list__header">
                <span className="list__title">{song.title}</span>
                <span className="list__meta">{song.duration}</span>
              </div>
              <p className="list__meta">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;