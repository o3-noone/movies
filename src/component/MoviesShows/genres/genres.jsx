import React, { useEffect, useRef, useState } from 'react';
import "./genres.css";
import { Link } from 'react-router-dom';
import GenresItem from './genresItem';
import ScrolTop from '../../scrolTop/scrolTop';
import Trial from '../../Home/tralFree/trial';

const Genres = ({ item, data, width }) => {
    useEffect(() => {
        document.title = `Genres |  ${item.name}`;
      }, []);
    const [page, setPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);
    const itemsPerPage = 25;

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };

    useEffect(() => {
        setFilteredData(data.slice(0, itemsPerPage*page));
    }, [data, page]);

    const inGenresRef = useRef(null)
    const [divWidth, setDivWidth] = useState(0)
    useEffect(() => {
        if (inGenresRef.current) {
            setDivWidth(inGenresRef.current.offsetWidth);
        }
    }, [width]);
    
    return (
        <>
        <div className='p4 genres-box'>
            <ScrolTop />
            <div className="genres">
                <div className="InMovie-header">
                    <ul className="inMovie-headerList">
                        <li className="inMovie-headerItem">
                            <Link to={`/`}>
                                Home
                            </Link>
                        </li>/
                        <li className="inMovie-headerItem">
                            <Link to={`/movies/${formatTitle(item.name)}`}>
                                Genres: {item.name}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="genres-listBox"ref={inGenresRef}>
                    <div className="genres-pages">
                        <button onClick={() => setPage(page-1)}>-</button>
                        <input
                            type="number"
                            value={page}
                            onChange={(e) => handlePageChange(Number(e.target.value))}
                        />
                        <button onClick={() => setPage(page+1)}>+</button>
                    </div>
                    <ul className="genres-list" >
                        {filteredData.length >= 1 ? filteredData.map((film, index) => (
                            <GenresItem width={width} divWidth={divWidth} key={index + 1} item={item} film={film} formatTitle={formatTitle} />
                        )) : <>
                            {[1, 2, 3, 4, 5].map((item, index) => (     
                                <div className="load" key={index + 1}>
                                    <div className="wrapper">
                                        <div className="cir"></div>

                                        <div className="line-4"></div>
                                    </div>
                                </div>
                            ))}
                        </>}
                    </ul>

                </div>
            </div>
        </div>
        <Trial/>
        </>
    );
}

export default Genres;
