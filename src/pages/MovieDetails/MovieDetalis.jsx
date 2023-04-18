import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../services/api';
import css from './MovieDetalis.module.css';
import defaultPoster from '../../img/no-poster-available.jpg';
import Blocks from './../../components/Loader/Loader.jsx';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };

  const location = useLocation();

  const comeBack = location.state?.from ?? '/';

  return (
    <>
      <Link className={css.btn} to={comeBack}>
        Go Back
      </Link>
      {loading ? (
        <div className={css.loading}>
          <Blocks />
        </div>
      ) : (
        <>
          <div className={css.imgWrap}>
            {data.poster_path ? (
              <img
                className={css.img}
                alt={data.original_title}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              />
            ) : (
              <img
                className={css.img}
                src={defaultPoster}
                alt="not available"
              />
            )}

            <div className={css.descrWrap}>
              <h1>
                {data.original_title} ({getYear(data.release_date)})
              </h1>
              <p className={css.descrTitle}>
                User Score: {~~(data.vote_average * 10)}%
              </p>
              <p className={css.descrTitle}>Overview</p>
              <p>{data.overview}</p>
              <p className={css.descrTitle}>Genres</p>
              <p>{getGenres(data.genres)}</p>
            </div>
          </div>
          <div>
            <ul className={css.btnList}>
              <li>
                <Link to="cast" state={{ from: comeBack }}>
                  <button className={css.castBtn}>Cast</button>
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: comeBack }}>
                  <button className={css.reviewsBtn}>Reviews</button>
                </Link>
              </li>
            </ul>
          </div>
          <Suspense
            fallback={
              <div className={css.loading}>
                <Blocks />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
