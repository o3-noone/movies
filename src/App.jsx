import { useState, useEffect, useRef } from 'react';
import Home from './component/Home/home';
import Header from './component/header/header';
import Footer from './component/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import Movies from './component/MoviesShows/movies';
import HeaderMobile from './component/header/headerMobile';
import InMovies from './component/inMovie/inMovies';
import Genres from './component/MoviesShows/genres/genres';
import Loading from './component/loading/loading';
import Support from './component/Support/support';
import Subscriptions from './component/Subscriptions/subscriptions';

function App() {
  const key = "46ec25609ba3e9b8903dc225769a8f80";
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [lengthData, setLengthData] = useState(0);
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const headerRef = useRef(null);
const [allData, setAllData]=useState([])
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

  useEffect(() => {
    const fetchMovies = async () => {
      let combinedResults = [];
      let itemsFetched = 0;

      try {
        for (let page = 1; page <= 100; page++) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`);
          const data = await response.json();
          combinedResults = [...combinedResults, ...data.results];
          itemsFetched += data.results.length;
          setLengthData(itemsFetched);
          await new Promise(resolve => setTimeout(resolve));
        }
        setData(combinedResults);
        
      } catch (error) {
      }
    };

    fetchMovies();
  }, [key]);
  useEffect(() => {
    const fetchMovies = async () => {
      let combinedResults = [];

      try {
        for (let page = 1; page <= 100; page++) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`);
          const data = await response.json();
          combinedResults = [...combinedResults, ...data.results];
          await new Promise(resolve => setTimeout(resolve));
          
        }
        setAllData(combinedResults)
      } catch (error) {
      }
    };

    fetchMovies();
  }, [key]);

  useEffect(() => {
    const updateWidth = () => {
      if (headerRef.current) {
        setWidth(headerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    const headerId = localStorage.getItem("headerId");
    setCount(headerId ? Number(headerId) : 1);
  }, []);

  const formatTitle = (title) => {
    return title.replace(/[^\w\s]/g, '-')
      .replace(/-+/g, '-')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();
  };

  return (
    <div className="container" ref={headerRef}>
      {width > 784 ? (
        <Header count={count} setCount={setCount} />
      ) : (
        <HeaderMobile count={count} setCount={setCount} />
      )}
      {data.length === 0 ? <Loading dataLength={lengthData} /> : (
        <Routes>
          <Route path="/" element={<Home setCount={setCount} width={width} data={data} />} />
          <Route path="/movies" element={<Movies width={width} data={data} />} />
          {list.map((listItem, listIndex) => {
            const filteredData = data.filter(movie => movie.genre_ids.includes(listItem.id));
            return (
              <Route
                key={listIndex+1}
                path={`/movies/${formatTitle(listItem.name)}`}
                element={<Genres width={width} data={filteredData} item={listItem} />}
              />
            );
          })}
          {allData && allData.map((item, index) => (
            list.map((listItem, listIndex) => {
              if (item.genre_ids.includes(listItem.id)) {
                return (
                  <Route
                    key={`${listIndex}`}
                    path={`/movies/${formatTitle(listItem.name)}/${formatTitle(item.title)}/${item.id}`}
                    element={<InMovies listItem={listItem} width={width} item={item} />}
                  />
                );
              }
              return null;
            })
          ))}
             {allData && allData.map((item, index) => (
            list.map((listItem, listIndex) => {
              if (item.genre_ids.includes(listItem.id)) {
                return (
                  <Route
                    key={`${index}-${listIndex}`}
                    path={`/movies/${formatTitle(item.title)}/${item.id}`}
                    element={<InMovies listItem={listItem} width={width} item={item} />}
                  />
                );
              }
              return null;
            })
          ))}
          <Route path="/support" element={<Support/>} />
          <Route path="/subscriptions" element={<Subscriptions/>} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      )}
      <Footer setCount={setCount} />
    </div>
  );
}

export default App;
