import React from 'react';
import './Discover.css';

function Discover() {
  
  const data = [
    {
      title: 'Apple unveils iOS & iPadOS 17',
      description: 'Apple has unveiled iOS 17 and iPadOS 17, which are now available as free software updates for compatible devices. The new operating systems bring a range of new features and improvements...',
    },
    {
      title: 'How to minimize your digital footprint',
      description: 'Here are some tips to minimize your digital footprint: Limit Social Media Use, Be Cautious Browsing the Web, Manage Online Accounts, Other Tips...',
    },
    {
      title: 'Tips to prevent phishing attacks',
      description: 'To prevent phishing attacks, follow these tips: Stay informed about phishing techniques, Think before you click, Install an anti-phishing toolbar...',
    },
    {
      title: 'How to gain more followers on LinkedIn',
      description: 'To gain more followers on LinkedIn, you can follow these tips and strategies: Complete your profile, Post regularly, Post during prime time...',
    },
    {
      title: 'Apple unveils iOS & iPadOS 17',
      description: 'Apple has unveiled iOS 17 and iPadOS 17, which are now available as free software updates for compatible devices. The new operating systems bring a range of new features and improvements...',
    },
    {
      title: 'How to minimize your digital footprint',
      description: 'Here are some tips to minimize your digital footprint: Limit Social Media Use, Be Cautious Browsing the Web, Manage Online Accounts, Other Tips...',
    },
    {
      title: 'Tips to prevent phishing attacks',
      description: 'To prevent phishing attacks, follow these tips: Stay informed about phishing techniques, Think before you click, Install an anti-phishing toolbar...',
    },
    {
      title: 'How to gain more followers on LinkedIn',
      description: 'To gain more followers on LinkedIn, you can follow these tips and strategies: Complete your profile, Post regularly, Post during prime time...',
    },
    {
      title: 'Apple unveils iOS & iPadOS 17',
      description: 'Apple has unveiled iOS 17 and iPadOS 17, which are now available as free software updates for compatible devices. The new operating systems bring a range of new features and improvements...',
    },
    {
      title: 'How to minimize your digital footprint',
      description: 'Here are some tips to minimize your digital footprint: Limit Social Media Use, Be Cautious Browsing the Web, Manage Online Accounts, Other Tips...',
    },
    {
      title: 'Tips to prevent phishing attacks',
      description: 'To prevent phishing attacks, follow these tips: Stay informed about phishing techniques, Think before you click, Install an anti-phishing toolbar...',
    },
    {
      title: 'How to gain more followers on LinkedIn',
      description: 'To gain more followers on LinkedIn, you can follow these tips and strategies: Complete your profile, Post regularly, Post during prime time...',
    },
    
    
  ];

  return (
    <div className='discover'>
    <div className='stick'>
      <div className='stick1' style={{width:'600px', display:'flex', alignItems:'flex-start'}}>
        <h1>Discover</h1>
      </div>
    </div>
    
      <div className='block'>
        {data.map((item, index) => (
          <div key={index} className="item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;