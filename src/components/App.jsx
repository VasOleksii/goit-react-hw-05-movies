import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Blocks from './Loader/Loader';
import css from './App.module.css';
import { NotFound } from '../pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetalis = lazy(() => import('../pages/MovieDetails/MovieDetalis'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: #e9e9e9;
    font-size: 30px;
    margin-left: 50px;
    &.active {
      color: #589ceb;
    }
  `;

  return (
    <>
      <nav className={css.navigation}>
        <StyledLink to="/" end>
          Home
        </StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense
        fallback={
          <div className={css.loading}>
            <Blocks />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetalis />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
