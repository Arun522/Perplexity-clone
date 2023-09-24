import React, { useEffect, useRef, useState } from 'react';
import * as HiIcons from 'react-icons/hi2';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import './NewThread.css';

function NewThread(props) {
  const popupInnerThreadRef = useRef(null);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      props.addThread(inputText); // Pass the input text to the parent component
      setInputText('');
      props.setIsOpen(false); // Close the popup
    }
  };

  useEffect(() => {
    // Function to handle clicks outside of the popup-inner-thread
    function handleClickOutside(event) {
      if (popupInnerThreadRef.current && !popupInnerThreadRef.current.contains(event.target)) {
        props.setIsOpen(false); // Close the popup
      }
    }

    // Attach the event listener when the popup is open
    if (props.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props.isOpen, props.setIsOpen]);

  return props.isOpen ? (
    <div className='popup-thread'>
      <div className='popup-inner-thread' ref={popupInnerThreadRef}>
        <div className='container-sign-thread'>
          <div className='input-container'>
            <input
              placeholder='Enter a new thread...'
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <div className='bottom'>
              <div className='focus-file'>
                <div className='focus' style={{ display: 'flex', alignItems: 'center' }}>
                  <HiIcons.HiMagnifyingGlass />
                  <span style={{ marginLeft: '8px' }}>Focus</span>
                </div>
                <div className='file' style={{ display: 'flex', alignItems: 'center' }}>
                  <MdIcons.MdOutlineAddCircleOutline />
                  <span style={{ marginLeft: '8px' }}>File</span>
                </div>
              </div>
              <div className='copilot-next' style={{ display: 'flex', alignItems: 'center' }}>
                <FaIcons.FaToggleOff style={{ fontSize: '24px' }} />
                <span style={{ marginLeft: '8px' }}>Copilot</span>
                <BsIcons.BsFillArrowRightCircleFill style={{ fontSize: '24px', marginLeft: '8px' }} />
              </div>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : null; // Use null to hide the component when isOpen is false
}

export default NewThread;





