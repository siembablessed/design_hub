import React, { useState } from 'react';
import './Tabs.css';
import Table from './components/Table';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === 'Tab1' ? 'tab active' : 'tab'}
          onClick={() => handleTabClick('Tab1')}
        >
          <strong>Engineering Designs</strong>
        </button>
        <button
          className={activeTab === 'Tab2' ? 'tab active' : 'tab'}
          onClick={() => handleTabClick('Tab2')}
        >
          <strong>Corporate Designs</strong>
        </button>
        <button
          className={activeTab === 'Tab3' ? 'tab active' : 'tab'}
          onClick={() => handleTabClick('Tab3')}
        >
          <strong>Digital Marketing</strong>
        </button>
      </div>
      <div className="content">
        {activeTab === 'Tab1' && <div><Table/></div>}
        {activeTab === 'Tab2' && <div><Table/></div>}
        {activeTab === 'Tab3' && <div><Table/></div>}
      </div>
    </div>
  );
};

export default Tabs;
