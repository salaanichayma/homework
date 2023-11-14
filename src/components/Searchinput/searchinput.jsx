import React, { useState, useMemo, useEffect, useRef } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './searchinput.css';
import debounce from 'lodash.debounce';

const SearchBarWithDropdown = ({ placeholder, onChange, options, isLoading, required, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isFilled, setIsFilled] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowDropdown(!!value);
    onChange(value);
    setIsFilled(!!value);
  };

  const handleOptionClick = (option) => {
    if (inputRef.current) {
      inputRef.current.value = option.name;
    }
    setSelectedOption(option.name);
    setShowDropdown(false);
    onSelect(option);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const reset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSearchTerm('');
    setShowDropdown(false);
    setSelectedOption('');
    onSelect('');
  };

  const handleClearButtonClick = (event) => {
    event.preventDefault();
    reset();
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  return (
    <div className="search-bar-container">
      <input
        ref={inputRef}
        type="text"
        onChange={debouncedResults}
        placeholder={placeholder}
        className={`search-input ${required && isFilled === false ? 'not-filled-border' : ''}`}
        onFocus={handleFocus}
      />
      {searchTerm && (
        <FontAwesomeIcon icon={faCircleXmark} className="clear-button" onClick={handleClearButtonClick} />
      )}

      {options.length > 0 && showDropdown && (
        <ul ref={dropdownRef} className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={selectedOption === option.name ? 'selected-option' : ''}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithDropdown;
