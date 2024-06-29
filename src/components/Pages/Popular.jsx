import styled from "styled-components";
import { useState, useEffect } from "react";

function Popular() {
  const [movieData, setMovieData] = useState([]);
  const autoKey = process.env.REACT_APP_AUTH_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + autoKey,
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err));
  }, [autoKey]);

  return (
    <PopularPage>
      <PopularTitle>
        <h1>Most Popular</h1>
      </PopularTitle>
      <PopularMovies>
        {movieData.map((card, index) => {
          return (
            <div key={index}>
              <img
                className="popularImages"
                src={`https://image.tmdb.org/t/p/w500/` + card.poster_path}
              />
            </div>
          );
        })}
      </PopularMovies>
    </PopularPage>
  );
}

const PopularPage = styled.div`
  color: white;
  margin-left: 3vw;
  margin-right: 2vw;
`;

const PopularTitle = styled.div`
  h1 {
    font-size: 25px;
  }
`;

const PopularMovies = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-x: auto;

  .popularImages {
    height: 200px;
    width: 150px;
    flex-shrink: 0;
  }
`;

export default Popular;
