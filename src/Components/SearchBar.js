import React from 'react'
const SEARCH_BTN_TXT = "მანახე აბა";

function SearchBar({updateSearchState, search}) {

    const handleChange = (event) => {
        updateSearchState(event.target.value);
    }

    return (
    <div className='search-bar'>
        <input className='search-bar'
        value={search}
        onChange={handleChange}
        />
        <button className='search-btn' type='submit'>{SEARCH_BTN_TXT}</button>
    </div>
    )
}

export default SearchBar