import React, { useState } from 'react'
import { BrowserHistory } from '../data-structures/DoublyLinkedList'
import { mockPages } from '../Data/mockPages'

function BrowserPage() {
    const [browserHistory] = useState(() => {
    const bh = new BrowserHistory()
    bh.visit(mockPages[0])
    return bh
    })
    const [currentPage, setCurrentPage] = useState(browserHistory.getCurrentPage())
    const [history, setHistory] = useState(browserHistory.getHistory())

    const goBack = () => {
    const prev = browserHistory.back()
    if (prev) {
        setCurrentPage(prev)
        setHistory(browserHistory.getHistory())
    }
    }

    const goForward = () => {
    const next = browserHistory.forward()
    if (next) {
        setCurrentPage(next)
        setHistory(browserHistory.getHistory())
    }
    }

    const visitPage = (page) => {
    browserHistory.visit(page)
    setCurrentPage(page)
    setHistory(browserHistory.getHistory())
    };

    const visitRandomPage = () => {
    const randomPage = mockPages[Math.floor(Math.random() * mockPages.length)]
    visitPage(randomPage)
    };

    return (
    <div style={{ padding: '20px' }}>
        <h2>Browser Navigation (Doubly Linked List)</h2>
        <div style={{ 
        backgroundColor: 'blue', 
        padding: '20px', 
        margin: '20px 0', 
        borderRadius: '8px' 
        }}>
        <h3>Current Page:</h3>
        {currentPage ? (
            <div>
            <h4>{currentPage.title}</h4>
            <p>URL: {currentPage.url}</p>
            </div>
        ) : (
            <p>No page loaded</p>
        )}
        </div>

        <div style={{ margin: '20px 0' }}>
        <button 
            onClick={goBack}
            disabled={!browserHistory.current?.prev}
            style={{ margin: '0 10px', padding: '10px 20px' }}
        >
            Back
        </button>
        <button 
            onClick={goForward}
            disabled={!browserHistory.current?.next}
            style={{ margin: '0 10px', padding: '10px 20px' }}
        >
            Forward
        </button>
        <button 
            onClick={visitRandomPage}
            style={{ margin: '0 10px', padding: '10px 20px' }}
        >
            Visit Random Page
        </button>
        </div>

      {/* Available Pages */}
        <div style={{ margin: '20px 0' }}>
        <h3>Available Pages:</h3>
        {mockPages.map((page, index) => (
            <button
            key={index}
            onClick={() => visitPage(page)}
            style={{
                display: 'block',
                margin: '5px 0',
                padding: '10px',
                width: '100%',
                textAlign: 'left',
                backgroundColor: 'black',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
            >
            <strong>{page.title}</strong><br />
            <small>{page.url}</small>
            </button>
        ))}
        </div>

        <div>
        <h3>Browser History:</h3>
        {history.map((item, index) => (
            <div
            key={index}
            style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: item.isCurrent ? 'black' : 'white',
                border: '1px solid #ddd',
                borderRadius: '4px'
            }}
            >
            <strong>{item.page.title}</strong> - {item.page.url}
            {item.isCurrent && <span style={{ color: 'green', marginLeft: '10px' }}>(Current)</span>}
            </div>
        ))}
        </div>
    </div>
    );
}

export default BrowserPage;