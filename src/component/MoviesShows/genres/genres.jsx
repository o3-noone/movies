import React, { useEffect, useState } from 'react';
import "./genres.css";
import { Link } from 'react-router-dom';
import GenresItem from './genresItem';
import ScrolTop from '../../scrolTop/scrolTop';

const Genres = ({ item, data, width }) => {
    const [page, setPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);
    const itemsPerPage = 24;

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setFilteredData(data.slice(startIndex, endIndex));
    }, [data, page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= Math.ceil(data.length / itemsPerPage)) {
            setPage(newPage);
        }
    };

    useEffect(() => {
        if (page < 1) {
            setPage(1);
        } else if (page > Math.ceil(data.length / itemsPerPage)) {
            setPage(Math.ceil(data.length / itemsPerPage));
        }
    }, [page]);

    return (
        <div className='p4 genres-box'>
            <ScrolTop/>
            <div className="genres">
                <div className="InMovie-header">
                    <ul className="inMovie-headerList">
                        <li className="inMovie-headerItem">
                            <Link to={`/`}>
                                Home
                            </Link>
                        </li>/
                        <li className="inMovie-headerItem">
                            <Link to={`/movies/${formatTitle(item.name)}/${item.id}`}>
                                Genres: {item.name}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="genres-listBox">
                <ul className="genres-list">
                    {filteredData.length >=1 ? filteredData.map((film, index) => (
                       <GenresItem key={index+1} item={item} film={film} formatTitle={formatTitle}/>
                    )) : <>
                       {[1, 2, 3, 4, 5].map((item, index)=>(
                         <div className="load" key={index+1}>
                         <div className="wrapper">
                             <div className="cir"></div>
                        
                             <div className="line-4"></div>
                         </div>
                     </div>
                       ))}
                    </>}
                </ul>
                    <div className="genres-pages">
                        <button onClick={() => handlePageChange(page - 1)}>-</button>
                        <input
                            type="number"
                            defaultValue={page}
                            onChange={(e) => handlePageChange(Number(e.target.value))}
                        />
                        <button onClick={() => handlePageChange(page + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Genres;
