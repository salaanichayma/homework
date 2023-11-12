// Import React and useState hook
import React, { useState } from 'react';
import './searchinput.css'; // Import your custom CSS file

// Create a functional component
function SearchBarWithDropdown() {
 // State to manage input value
 const [searchTerm, setSearchTerm] = useState('');

 // State to manage drop-down visibility
 const [showDropdown, setShowDropdown] = useState(false);

 // Dummy data for the drop-down options
 const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

 // Function to handle input change
 const handleInputChange = (event) => {
   const value = event.target.value;
   setSearchTerm(value);

   // Show the drop-down when there is input
   setShowDropdown(value.length > 0);
 };

 // Function to handle option selection
 const handleOptionClick = (option) => {
   setSearchTerm(option);
   setShowDropdown(false); // Hide the drop-down after selecting an option
 };

  return (
    <div className="search-bar-container">
      {/* Search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Start (stop, address, POI)"
        className="search-input"
      />

      {/* Drop-down */}
      {showDropdown && (
        <ul className="dropdown-list">
          {dropdownOptions
            .filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBarWithDropdown;
