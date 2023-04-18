import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getTrendingMovies } from './../../services/api';
import css from './Home.module.css';
import Blocks from './../../components/Loader/Loader.jsx';
import Paginator from '../../components/Paginator/Paginator';
import defaultPoster from '../../img/no-poster-available.jpg';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);
  const [totalPages, settotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies(page);
        setMovies(data.results);
        settotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

  return (
    <>
      <h2 className={css.pageTitle}>Trending movies:</h2>
      <ul className={css.movies}>
        {loading ? (
          <div className={css.loading}>
            <Blocks />
          </div>
        ) : (
          movies.map(({ title, id, poster_path }) => (
            <li key={id} className={css.movieItem}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  className={css.poster}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultPoster
                  }
                  alt={title}
                />
                <p className={css.title}>{title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
      <Paginator
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        params={params}
        currentPage={Number(params?.page - 1) || 0}
      />
    </>
  );
};

export default Home;
