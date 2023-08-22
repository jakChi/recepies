//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Recepie from './Components/Recepie';
import SearchBar from './Components/SearchBar';

function App() {
  const APP_KEY = "6767fc0c167f1193b1e0a38045aa3ae8	";
  const APP_ID = "a32c73cd";
  

  const [ results, setResults ] = useState([]);
  const [ searchItem, setSearchItem ] = useState("chicken");
  const [ query, setQuery ] = useState("chicken");

  useEffect(() => {
    const API = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
    fetch(API)
    .then(res => res.json())
    .then(data => setResults(data.hits));
  }, [query]);


  const handleQuery = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value);
  }

  console.log(results)

  return (
    <div className="App">
      <h1 className='title'>ახალი რეცეპტები ქალებო!</h1>
      <form className='search-form' onSubmit={handleQuery}>
        <SearchBar updateSearchState={(val) => setSearchItem(val)} search={searchItem} />
      </form>
     
      <div className='recipe-container'>
        {
          results.map((recipe, key) => (
            <Recepie 
            key={key}
            name={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            ingredients={recipe.recipe.ingredientLines}
            imgSrc={recipe.recipe.images.REGULAR.url}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
