
import React, { useEffect, useState } from 'react';
import getLocations from '../../services/getLocations';

import SearchBarWithDropdown from './searchinput';

import "./MapForm.css"
const LocationComponent = () => {
 
     
   

  return (
    <form className='form'>
      <label className='labelName'><span className='required' >*</span>Start:</label>
        <SearchBarWithDropdown />
        <label className='labelName'><span className='required' >*</span>End:</label>
        <SearchBarWithDropdown />

    </form>
  );
};

export default LocationComponent;
