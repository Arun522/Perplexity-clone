import React, { useState, useEffect } from 'react';
import './Library.css';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import NewThread from '../components/NewThread';

function Library() {

  function calculateTimeSinceCreation(creationTimestamp) {
    const currentTimestamp = new Date().getTime();
    const differenceInSeconds = Math.floor((currentTimestamp - creationTimestamp) / 1000);
  
    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  }
  const creationTimestamp = new Date().getTime();
  
  const [selectedThread, setSelectedThread] = useState(null);
  const handleDeleteThread = (threadIndex) => {
    setSelectedThread(threadIndex);
  };
  const confirmDeleteThread = () => {
    if (selectedThread !== null) {
      const updatedThreads = [...threads];
      updatedThreads.splice(selectedThread, 1); // Remove the selected thread
      setThreads(updatedThreads);
      setSelectedThread(null); // Clear the selected thread
    }
  };


  const [newThreadPopup, setNewThreadPopup] = useState(false);
  const [threads, setThreads] = useState(() => {
    // Initialize threads from local storage or an empty array if not present
    const storedThreads = localStorage.getItem('threads');
    return storedThreads ? JSON.parse(storedThreads) : [];
  });

  // Function to add a new thread to the list
  const addThread = (text) => {
    const currentTimestamp = new Date().getTime();
    const newThread = {
      text,
      creationTimestamp: currentTimestamp,
    };
    setThreads([...threads, newThread]);
  };

  // Save threads data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('threads', JSON.stringify(threads));
  }, [threads]);

  return (
    <div className='library'>
      <NewThread isOpen={newThreadPopup} setIsOpen={setNewThreadPopup} addThread={addThread} />
      <div className="header">
        <div style={{ display: 'flex' }}>
          <h1>Library</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search your threads" />
        </div>
      </div>
      <div className="threads-collections">
        <div className='threads'>
          <div className='thread-header'>
            <h3>Thread</h3>
            <div className='box1-box2'>
              <div className='box1' style={{ cursor: 'pointer' }}><BiIcons.BiDotsHorizontalRounded /></div>
              <div className='box2' onClick={() => setNewThreadPopup(true)} style={{ cursor: 'pointer' }}><AiIcons.AiOutlinePlus /></div>
            </div>
          </div>
          <div className='thread-data'>
          {threads.length === 0 ? (
          <p>No threads yet</p>
        ) : (
          <ul>
            {threads.map((thread, index) => (
              <li className='thread-head' key={index}>
                {thread.text} {/* Render the thread text */}
                <p>I'm sorry, I cannot provide an answer to this question as it is not a valid question. It appears to be a random word or expression that does not have a clear meaning or context. Please provide a valid...</p>
                <div className='time-delete'>
                  <p>{calculateTimeSinceCreation(thread.creationTimestamp)}</p>
                  <div className='add-delete'>
                    <div className='add-collection' style={{ cursor: 'pointer' }}><AiIcons.AiOutlinePlus /></div>
                    {/* Render the "Delete Thread" button */}
                    <div
                      className='delete-thread'
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDeleteThread(index)} // Set the selected thread
                    >
                      <BiIcons.BiDotsHorizontalRounded />
                    </div>
                  </div>
                </div>
                {/* Conditionally render the confirmation message */}
                {selectedThread === index && (
                  <div>
                    <p>Are you sure you want to delete this thread?</p>
                    <button onClick={confirmDeleteThread}>Yes</button>
                    <button onClick={() => setSelectedThread(null)}>No</button>
                  </div>
                )}
                <hr />
              </li>
            ))}
          </ul>
        )}
          
          </div>
        </div>
        <div className='collections'>
          <div className='collection-header'>
            <h3>Collection</h3>
            <div className='box1-box2'>
              <div className='box2' style={{ cursor: 'pointer' }}><AiIcons.AiOutlinePlus /></div>
            </div>
          </div>
          <div className='collection-data'>
            <p>Organize your threads or collaborate with others</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
