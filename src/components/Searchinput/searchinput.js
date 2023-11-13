import React, { useState, useMemo } from 'react'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './searchinput.css'

function SearchBarWithDropdown({ placeholder, onChange, options, isLoading }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    setShowDropdown(value.length > 0)
    onChange(value)
  }

  const handleOptionClick = (option) => {
    setSearchTerm(option)
    setShowDropdown(false)
  }

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [options, searchTerm])

  const reset = () => {
    setSearchTerm('')
    setShowDropdown(false)
  }
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="search-input"
      />
      {searchTerm && (
        <FontAwesomeIcon
          icon={faXmark}
          className="clear-button"
          onClick={reset}
        />
      )}

      {showDropdown && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option.name)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBarWithDropdown
