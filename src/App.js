//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Recepie from './Components/Recepie';
import SearchBar from './Components/SearchBar';

function App() {
//constant variables  
  const APP_KEY = "6767fc0c167f1193b1e0a38045aa3ae8	";
  const APP_ID = "a32c73cd";
  const PAGE_TITLE = "ახალი რეცეპტები ქალებოო!";
  
//App state
  const [ results, setResults ] = useState([]);
  const [ searchItem, setSearchItem ] = useState("");
  const [ query, setQuery ] = useState("");

//if query value changes only then is API fetched and response returned
  useEffect(() => {
    const API = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
    fetch(API)
    .then(res => res.json())
    .then(data => setResults(data.hits));
  }, [query]);

//when search button is pressed and form submitted search-item gets query and then API is being fetched
  const handleQuery = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value);
    setSearchItem("");
  }

  return (
    <div className="App">
      <h1 className='title'>{PAGE_TITLE}</h1>
      <form className='search-form' onSubmit={handleQuery}>
        <SearchBar updateSearchState={(val) => setSearchItem(val)} search={searchItem} />
      </form>
     
      <div className='recipes'>
        {
          results.map((recipe, key) => (
            <Recepie 
            key={key}
            name={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            ingredients={recipe.recipe.ingredientLines}
            imgSrc={recipe.recipe.images.SMALL.url}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
