import React, { useState } from 'react'
import { SongPlaylist } from '../data-structures/LinkedList'
import { mockSongs } from '../Data/MockSongs'

function PlaylistPage() {
    const [playlist] = useState(() => {
    const pl = new SongPlaylist()
    mockSongs.forEach(song => pl.add(song))
    return pl
    });
    const [currentSong, setCurrentSong] = useState(playlist.getCurrentSong())
    const [isPlaying, setIsPlaying] = useState(false)

    const playNext = () => {
    const next = playlist.next()
    if (next) {
        setCurrentSong(next)
    }
    };

    const playPrevious = () => {
    const prev = playlist.previous()
    if (prev) {
        setCurrentSong(prev)
    }
    };

    const togglePlay = () => {
    setIsPlaying(!isPlaying)
    };

    return (
    <div style={{ padding: '20px' }}>
        <h2>Music Player (Linked List)</h2>
        <div style={{ 
        backgroundColor: 'blue', 
        padding: '20px', 
        margin: '20px 0', 
        borderRadius: '8px' 
        }}>
        <h3>Now Playing:</h3>
        {currentSong ? (
            <div>
            <h4>{currentSong.title}</h4>
            <p>Artist: {currentSong.artist}</p>
            <p>Duration: {currentSong.duration}</p>
            </div>
        ) : (
            <p>No song selected</p>
        )}
        </div>

        <div style={{ margin: '20px 0' }}>
        <button 
            onClick={playPrevious}
            style={{ margin: '0 10px', padding: '10px 20px' }}
        >
            Previous
        </button>
        <button 
            onClick={togglePlay}
            style={{ margin: '0 10px', padding: '10px 20px' }}
        >
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
            onClick={playNext}
            style={{ margin: '0 10px', padding: '10px 20px' }}
        >
            Next
        </button>
        </div>
        <div>
        <h3>Playlist:</h3>
        {playlist.toArray().map((song, index) => (
            <div
            key={song.id}
            style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: currentSong && currentSong.id === song.id ? 'blue' : 'black',
                border: '1px solid #ddd',
                borderRadius: '4px'
            }}
            >
            <strong>{song.title}</strong> - {song.artist} ({song.duration})
            </div>
        ))}
        </div>
    </div>
    )
}

export default PlaylistPage