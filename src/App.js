//import logo from './logo.svg';
import './App.css';

function App() {

  const APP_KEY = "6767fc0c167f1193b1e0a38045aa3ae8	";
  const APP_ID = "a32c73cd";
  const API = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  fetch(API).then(res => (res.json())).then(data => console.log(data));

  return (
    <div className="App">
      <h1 className='title'>FOOOOD Recepies</h1>
      <div className='container'>

      </div>
    </div>
  );
}

export default App;
