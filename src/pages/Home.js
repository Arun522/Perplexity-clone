import React from 'react';
import './Home.css';
import * as HiIcons from 'react-icons/hi2';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='container middle-container'>
        <h1>Where knowledge begins</h1>
        <div className='input-container'>
          <input placeholder='Ask anything...'></input>
          <div className='bottom'>
            <div className='focus-file'>
              <div className='focus' style={{ display: 'flex', alignItems: 'center' }}>
                <HiIcons.HiMagnifyingGlass />
                <span style={{ marginLeft: '8px' }}>Focus</span>
              </div>
              <div className='file' style={{ display: 'flex', alignItems: 'center' }}>
                <MdIcons.MdOutlineAddCircleOutline />
                <span style={{ marginLeft: '8px' }}>file</span>
              </div>
            </div>
            <div className='copilot-next' style={{ display: 'flex', alignItems: 'center' }}>
                <FaIcons.FaToggleOff style={{ fontSize: '24px' }} />
                <span style={{ marginLeft: '8px' }}>Copilot</span>
                <BsIcons.BsFillArrowRightCircleFill style={{ fontSize: '24px', marginLeft: '8px' }} />
            </div>
          </div>
        </div>
        <p>Try Asking</p>
        <div className='text-para'>
          <text>history of Argentina</text>
          <text>unique colorado flowers</text>
          <text>checkout time w hotel cdmx</text>
          <text>how to enter a div</text>
        </div>
        <div className='text-para'>
          <text>brown dog ideas</text>
          <text>healthy restaurant in sf</text>
          <text>d/dx x^2 y^4, d/dy x^2 y^2</text>
        </div>
      </div>
      <div className='container bottom-container'>
        <text>Try Pro</text>
        <text>Careers</text>
        <text>FAQ</text>
        <text>Labs</text>
        <text>Blog</text>
        <text>Privacy</text>
        <text>Terms</text>
      </div>
    </div>
  );
}

export default Home;
