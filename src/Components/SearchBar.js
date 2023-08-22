import React from 'react'
const SEARCH_BTN_TXT = "მანახე აბა";

function SearchBar({updateSearchState, search}) {
//when updateSearchState runs it returns event value 
//and gives it to the parent component in the App.js 
//where I creted function which changes state, 
//then I give state to prop:search which is come down here as search value in the search-box
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