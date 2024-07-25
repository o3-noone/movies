import { useState, useEffect } from 'react';
import './App.css';
import Home from './component/Home/home';
import Header from './component/header/header';

function App() {
  const key = "46ec25609ba3e9b8903dc225769a8f80";
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const fetchData = async () => {
    try {
      // Fetch data from page 1 and page 2
      const response1 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`);
      const response2 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=2`);
      const data1 = await response1.json();
      const data2 = await response2.json();
      
      // Combine the results from both pages
      const combinedResults = [...data1.results, ...data2.results].slice(0, 36); // Limit to 36 items
      setData(combinedResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header count={count} setCount={setCount} />
      <Home data={data} />
    </div>
  );
}

export default App;
