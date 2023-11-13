
import React from 'react';
import Header from '../components/Header/header';
import Sidebar from '../components/Menu/Sidebar';
import Footer from '../components/Footer/footer';

import './firstpage.css';


import LocationComponent from '../components/Form/MapForm';

const DataPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
        <div className="left-side">
        <LocationComponent />
      </div>
      <div className="right-side">
        
      </div>
    
     
    </div>
      </div>
      <Footer />
    </>
  );
}

export default DataPage;
