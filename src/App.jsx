import { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './component/Home/home';
import Header from './component/header/header';
import Footer from './component/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import Movies from './component/MoviesShows/movies';
import HeaderMobile from './component/header/headerMobile';
import InMovies from './component/inMovie/inMovies';
import Genres from './component/MoviesShows/genres/genres';

function App() {
  const key = "46ec25609ba3e9b8903dc225769a8f80";
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [list, setList] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
      const result = await response.json();
      setList(result.genres);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Header kengligini olish uchun hooklar
  const headerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (headerRef.current) {
        setWidth(headerRef.current.offsetWidth);
      }
    };

    updateWidth(); // Komponent yuklanganida kenglikni o'lchash
    window.addEventListener('resize', updateWidth); // Ekran o'lchamlarining o'zgarishini kuzatish

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

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
        for (let page = 1; page <= 400; page++) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`);
          const data = await response.json();
          combinedResults = [...combinedResults, ...data.results];

          await new Promise(resolve => setTimeout(resolve, 1));
        }

        setData(combinedResults.slice(0, 5600));
      } catch (error) {
      }
    };

    fetchData();
  }, [key]);

  const formatTitle = (title) => {
    let formattedTitle = title.replace(/[^\w\s]/g, '-');
    formattedTitle = formattedTitle.replace(/-+/g, '-');
    formattedTitle = formattedTitle.replace(/\s+/g, '-');
    formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
    return formattedTitle.toLowerCase();
  };


  return (
    <div className="container" ref={headerRef}>
      {width > 784 ? (
        <Header count={count} setCount={setCount} />
      ) : (
        <HeaderMobile count={count} setCount={setCount} />
      )}

      <Routes>
        <Route path="/" element={<Home setCount={setCount} width={width} data={data} />} />
        <Route path="/movies" element={<Movies width={width} data={data} />} />
        {data.map((item, index) => (
          list.map((listItem, listIndex) => {
            if (item.genre_ids.includes(listItem.id)) {
              return (
                <Route
                  key={`${index}-${listIndex}`}
                  path={`/movies/genres/${formatTitle(item.title)}`}
                  element={<InMovies listItem={listItem} width={width} item={item} />}
                />
              );
            }
            return null;
          })
        ))}
        {data.map((item, index) => (
          list.map((listItem, listIndex) => {
            if (item.genre_ids.includes(listItem.id)) {
              return (
                <Route
                  key={`${index}-${listIndex}`}
                  path={`/movies/${formatTitle(item.title)}`}
                  element={<InMovies listItem={listItem} width={width} item={item} />}
                />
              );
            }
            return null;
          })
        ))}
        {list.map((item, index) => {
          const filteredData = data.filter(movie => movie.genre_ids.includes(item.id));
          return (
            <Route
              key={index + 1}
              path={`/movies/${formatTitle(item.name)}`}
              element={<Genres width={width} data={filteredData} item={item} />}
            />
          );
        })}
        {data.map((item, index) => (
          list.map((listItem, listIndex) => {
            if (item.genre_ids.includes(listItem.id)) {
              return (
                <Route
                  key={`${index}-${listIndex}`}
                  path={`/movies/${formatTitle(listItem.name)}/${formatTitle(item.title)}`}
                  element={<InMovies listItem={listItem} width={width} item={item} />}
                />
              );
            }
            return null;
          })
        ))}
        <Route path="*" element={<div>Page not found</div>} /> {/* Fallback route */}
      </Routes>
      <Footer setCount={setCount} />
    </div>
  );
}

export default App;
