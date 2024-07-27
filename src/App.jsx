import { useState, useEffect } from 'react';
import './App.css';
import Home from './component/Home/home';
import Header from './component/header/header';
import Footer from './component/Footer/footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from './component/MoviesShows/movies';

function App() {
  const key = "46ec25609ba3e9b8903dc225769a8f80";
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const headerId = localStorage.getItem("headerId");
    if (headerId) {
      setCount(Number(headerId));
    } else {
      setCount(1);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let combinedResults = [];

      try {
        for (let page = 1; page <= 2; page++) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`);
          const data = await response.json();
          combinedResults = [...combinedResults, ...data.results];

          await new Promise(resolve => setTimeout(resolve, 200));
        }

        setData(combinedResults.slice(0, 36));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (count === 1) {
      navigate("/");
    } else if (count === 2) {
      navigate("/movies");
    }
  }, [count, navigate]);

  return (
    <div className="container">
      <Header count={count} setCount={setCount} />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/movies' element={<Movies data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
