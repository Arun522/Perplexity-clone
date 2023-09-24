import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import myImage from '../images/Perplexity_AI_logo.svg';
import * as CgLogIn from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi2';
import * as Io5Icons from 'react-icons/io5';
import * as Fa6Icons from 'react-icons/fa6';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';

function Sidebar() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  const handleResize = () => {
    // Check the viewport width and set a flag for responsiveness
    setIsResponsive(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add a resize event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setButtonPopup(false); // Close the popup when toggling the sidebar
    setIsResponsive(!isResponsive);
  };

  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <HiIcons.HiMagnifyingGlass />,
      cName: 'nav-text',
    },
    {
      title: 'Discover',
      path: '/discover',
      icon: <AiIcons.AiOutlineCompass />,
      cName: 'nav-text',
    },
    {
      title: 'Library',
      path: '/library',
      icon: <Io5Icons.IoLibraryOutline />,
      cName: 'nav-text',
    },
    {
      title: 'Login',
      path: '/',
      icon: <CgLogIn.CgLogIn />,
      cName: 'nav-text',
      onClick: () => setButtonPopup(true), // Open the popup when Login is clicked
    },
  ];

  return (
    <div>
      <div className={`sidebar ${isResponsive ? 'responsive' : ''}`}>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
        {isResponsive && (
          <div className='menu-button' onClick={toggleSidebar}>
            <span>&#9776;</span>
          </div>
        )}
        <div className='up'>
          <div className='company'>
            <img src={myImage} alt='Company Logo' />
          </div>
          <input className='input' placeholder='New Thread'></input>
          <div className='menu'>
            <ul>
              {SidebarData.map((item, index) => (
                <li key={index} className={item.cName} onClick={item.onClick}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.icon}
                    <span style={{ marginLeft: '8px' }}>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className='sign-up-btn' onClick={() => setButtonPopup(true)}>
            Sign up
          </button>
        </div>
        <div className='down'>
          <div className='sub1'>
            <h4>Try Pro</h4>
            <p>Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload more files.</p>
            <button>Learn More</button>
            <hr style={{ marginTop: '20px' }} />
          </div>
          <div className='sub2' style={{ display: 'flex', alignItems: 'center' }}>
            <BsIcons.BsPhone />
            <p style={{ marginRight: '20px' }}>Download</p>
            <Fa6Icons.FaXTwitter style={{ marginRight: '20px' }} />
            <BsIcons.BsDiscord />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
