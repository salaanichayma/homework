import React, { useState, useMemo , useEffect, useRef} from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './searchinput.css';
import debouce from "lodash.debounce";



const SearchBarWithDropdown = ({ placeholder, onChange, options, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

 


  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowDropdown(!!value);
    onChange(value)
   
   
  };

  const handleOptionClick = (option) => {
   if (inputRef.current) {
    inputRef.current.value = option;
  }
    setShowDropdown(false);
  };

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]); 

  const debouncedResults = useMemo(() => {
    
    return debouce(handleInputChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  })

  const reset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSearchTerm('');
    setShowDropdown(false);
  };

  const handleClearButtonClick = (event) => {
    event.preventDefault();
    reset();
  };

  return (
    <div className="search-bar-container">
      <input
        ref={inputRef}
        type="text"
        onChange={debouncedResults}
        placeholder={placeholder}
        className="search-input"
      />
      {searchTerm && (
        <FontAwesomeIcon icon={faCircleXmark} className="clear-button"  onClick={handleClearButtonClick} />
      )}

      {options.length > 0 && showDropdown && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option.name)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithDropdown;
