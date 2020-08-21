import React from 'react';
const SearchBar = ({ searchField, searchChange }) => {
    return (
        <div className="pa3">
            <input 
                className="pa3 ba b--green bg-light-green"
                type="search" 
                placeholder="Search for robots"
                onChange={ searchChange }
                />
                
        </div>
    );
}
export default SearchBar;