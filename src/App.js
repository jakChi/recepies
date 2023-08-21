//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Recepie from './Components/Recepie';

function App() {
  const APP_KEY = "6767fc0c167f1193b1e0a38045aa3ae8	";
  const APP_ID = "a32c73cd";
  

  const [ results, setResults ] = useState([]);

  useEffect(() => {
    const API = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    fetch(API)
    .then(res => res.json())
    .then(data => setResults(data.hits));
  }, []);

  console.log(results)

  return (
    <div className="App">
      <h1 className='title'>FOOOOD Recepies</h1>
      <div className='container'>
        {
          results.map((recipe, key) => (
            <Recepie 
            key={key}
            name={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            imgSrc={recipe.recipe.images.REGULAR.url}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
